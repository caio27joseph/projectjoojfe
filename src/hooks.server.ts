import { redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

const isUnauth = async (res: Response) => {
	const cRes = res.clone();
	const data = await cRes.json();
	if (cRes?.status === 401) {
		return true;
	}
	if (data?.errors?.length) {
		return data.errors[0].extensions.status === 401;
	}
	return false;
};

export async function handleFetch({ request, fetch, event }) {
	const access_token = event.cookies.get('access_token');
	const backup = request.clone();
	request.headers.set('authorization', 'Bearer ' + access_token);

	const res = await fetch(request);
	if (await isUnauth(res)) {
		const refresh_token = event.cookies.get('refresh_token');
		if (!refresh_token) {
			if (event.url.pathname !== '/auth/sign-in') throw redirect(302, '/auth/sign-in');
			return res;
		}
		const refreshRes = await fetch(API_URL + '/auth/refresh', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ refresh_token })
		});
		if (await isUnauth(refreshRes)) {
			event.cookies.delete('access_token', {
				path: '/'
			});
			event.cookies.delete('refresh_token', {
				path: '/'
			});
			throw redirect(302, '/auth/sign-in');
		}
		const data = await refreshRes.json();
		const { access_token, refresh_token: new_refresh_token } = data;
		event.cookies.set('access_token', access_token, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60, // 1 hour,
			sameSite: 'lax'
		});
		event.cookies.set('refresh_token', new_refresh_token, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			sameSite: 'lax'
		});

		backup.headers.set('authorization', 'Bearer ' + access_token);
		const res2 = await fetch(backup);

		return res2;
	}

	return res;
}

export async function handle({ event, resolve }) {
	const access_token = event.cookies.get('access_token');
	const path = event.url.pathname;

	const signRoutes = [
		'/auth/sign-in',
		'/auth/sign-up',
		'/auth/forgot-password',
		'/auth/reset-password'
	];
	const unprotected = ['/'];

	if (signRoutes.includes(path) && access_token) {
		throw redirect(302, '/home');
	}

	if (unprotected.includes(path) || access_token) {
		const response = await resolve(event);

		return response;
	}
	if (path !== '/auth/sign-in') throw redirect(302, '/auth/sign-in');
	const response = await resolve(event);

	return response;
}

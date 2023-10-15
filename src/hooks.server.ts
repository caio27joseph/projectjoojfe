import { redirect } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';
import { deleteAuthToken, setAuthToken } from '$lib/auth/tokens';
import { setSession } from '$houdini';

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
	request.headers.set('authorization', 'Bearer ' + access_token);

	const backupRequest = request.clone();
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
			deleteAuthToken(event.cookies);
			throw redirect(302, '/auth/sign-in');
		}
		const data = await refreshRes.json();
		const { access_token, refresh_token: new_refresh_token } = data;
		setAuthToken(event.cookies, { access_token, refresh_token: new_refresh_token });
		event.locals.authenticated = true;

		backupRequest.headers.set('authorization', 'Bearer ' + access_token);
		const res2 = await fetch(backupRequest);

		return res2;
	}

	return res;
}
export async function handle({ event, resolve }) {
	const access_token = event.cookies.get('access_token');

	event.locals.authenticated = !!access_token;

	const path = event.url.pathname;

	const signRoutes = [
		'/auth/sign-in',
		'/auth/sign-up',
		'/auth/forgot-password',
		'/auth/reset-password'
	];
	const unprotected = ['/'];
	if (event.locals.authenticated) {
		setSession(event, {
			access_token: access_token as string
		});

		if (signRoutes.includes(path)) {
			throw redirect(302, '/home');
		}
		return resolve(event);
	}
	if (unprotected.includes(path)) {
		return resolve(event);
	}
	const response = await resolve(event);
	if (event.locals.authenticated) {
		if (signRoutes.includes(path)) {
			throw redirect(302, '/home');
		}
		return response;
	}

	if (path !== '/auth/sign-in') throw redirect(302, '/auth/sign-in');
	return resolve(event);
}

import { goto, invalidateAll } from '$app/navigation';
import { API_URL } from '$env/static/private';
import { redirect, type Actions, type RequestEvent, type ActionResult, fail } from '@sveltejs/kit';

// export async function load({ cookies }) {}

export const actions: Actions = {
	login: async ({
		cookies,
		fetch,
		locals,
		request
	}: RequestEvent<{ email?: string; password?: string }>) => {
		const form = await request.formData();
		const email = form.get('email')?.toString();
		const password = form.get('password')?.toString();

		const response = await fetch(API_URL + '/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});
		if (!response.ok) {
			const data = await response.json();
			return fail(401, data);
		} else {
			const { access_token, refresh_token } = await response.json();
			if (!access_token) {
				throw new Error('No access token');
			}
			cookies.set('access_token', access_token, {
				path: '/',
				httpOnly: true,
				maxAge: 60 * 60,
				sameSite: 'lax'
			});
			cookies.set('refresh_token', refresh_token, {
				path: '/',
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 7,
				sameSite: 'lax'
			});

			throw redirect(302, '/home');
		}
	}
};

import { goto, invalidateAll } from '$app/navigation';
import { API_URL } from '$env/static/private';
import { setAuthToken } from '$lib/auth/tokens';
import { redirect, type Actions, type RequestEvent, type ActionResult, fail } from '@sveltejs/kit';

// export async function load({ cookies }) {}

export const actions: Actions = {
	login: async ({
		cookies,
		fetch,
		locals,
		request
	}: RequestEvent<{ email?: string; password?: string }>) => {
		const form = await request.clone().formData();
		const email = form.get('email')?.toString();
		const password = form.get('password')?.toString();

		const response = await fetch(API_URL + '/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});
		const data = await response.json();
		if (!response.ok) {
			return fail(401, data);
		} else {
			const { access_token, refresh_token } = data;
			if (!access_token) {
				throw new Error('No access token');
			}
			try {
				setAuthToken(cookies, { access_token, refresh_token });
			} catch (error) {}
			throw redirect(302, '/home');
		}
	}
};

import { goto } from '$app/navigation';
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
		const email = form.get('email')?.toString() ?? '';
		const password = form.get('password')?.toString() ?? '';

		const response = await fetch('http://localhost:3050/auth/login', {
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
				maxAge: 60 * 60, // 1 hour,
				sameSite: 'lax'
			});
			cookies.set('refresh_token', refresh_token, {
				path: '/',
				httpOnly: true,
				sameSite: 'lax'
			});

			throw redirect(302, '/home');
		}
	}
};

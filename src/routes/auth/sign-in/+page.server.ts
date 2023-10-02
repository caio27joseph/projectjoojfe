import { goto } from '$app/navigation';
import {
	redirect,
	type ActionFailure,
	type Actions,
	type Redirect,
	type RequestEvent
} from '@sveltejs/kit';

// export async function load({ cookies }) {}

type LoginFormResponse = {
	email: string;
	error: boolean;
	message: string;
};

export const actions: Actions = {
	login: async ({
		cookies,
		fetch,
		request
	}: RequestEvent<{ email?: string; password?: string }>) => {
		const form = await request.formData();
		const email = form.get('email')?.toString() ?? '';
		const password = form.get('password')?.toString() ?? '';

		let loginResponse: LoginFormResponse = {
			email,
			error: false,
			message: ''
		};
		try {
			const response = await fetch('http://localhost:3050/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});
			if (!response.ok) {
				const data = await response.json();
				loginResponse = {
					...loginResponse,
					error: true,
					message: data.message || 'Login failed'
				};
			} else {
				const { access_token } = await response.json();
				cookies.set('access_token', access_token, {
					path: '/',
					httpOnly: true,
					maxAge: 60 * 60, // 1 hour,
					sameSite: 'lax'
				});
				throw redirect(302, '/home');
			}
		} finally {
			return loginResponse;
		}
	}
};

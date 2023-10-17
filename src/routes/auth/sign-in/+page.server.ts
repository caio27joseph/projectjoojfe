import { goto, invalidateAll } from '$app/navigation';
import { API_URL } from '$env/static/private';
import { setAuthToken } from '$lib/auth/tokens';
import { redirect, type Actions, type RequestEvent, type ActionResult, fail } from '@sveltejs/kit';
import { ZodError, z } from 'zod';

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(64).trim().optional()
});

export const actions: Actions = {
	login: async ({
		cookies,
		fetch,
		locals,
		request
	}: RequestEvent<{ email?: string; password?: string }>) => {
		const form = Object.fromEntries(await request.clone().formData());

		try {
			const result = loginSchema.parse(form);
		} catch (err) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				const { password, ...data } = form;
				return {
					data,
					errors
				};
			}
		}

		const response = await fetch(API_URL + '/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
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

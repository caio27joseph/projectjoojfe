import { goto, invalidateAll } from '$app/navigation';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { setAuthToken } from '$lib/auth/tokens';
import { redirect, type Actions, type RequestEvent, type ActionResult, fail } from '@sveltejs/kit';
import { ZodError, z } from 'zod';
import { API_URL } from '$env/static/private';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(64).trim().optional()
});

export const load = async () => {
	const form = await superValidate(schema);
	return { form };
};

export const actions: Actions = {
	login: async ({
		cookies,
		fetch,
		locals,
		request
	}: RequestEvent<{ email?: string; password?: string }>) => {
		const form = await superValidate(request.clone(), schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		const response = await fetch(API_URL + '/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form.data)
		});

		const data = await response.json();

		if (!response.ok) {
			return setError(form, 'email', 'Invalid email or password');
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

import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { setAuthToken } from '$lib/auth/tokens';
import { redirect, type Actions, type RequestEvent, type ActionResult, fail } from '@sveltejs/kit';
import { z } from 'zod';
import { VITE_API_URL } from '$env/static/private';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(64)
});

export const load = async () => {
	const form = await superValidate(schema);
	return { form };
};

export const actions: Actions = {
	register: async ({
		cookies,
		fetch,
		locals,
		request
	}: RequestEvent<{ email?: string; password?: string }>) => {
		const form = await superValidate(request.clone(), schema);
		if (!form.valid) {
			return fail(400, { form });
		}

		console.log('validating');

		const response = await fetch(VITE_API_URL + '/auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form.data)
		});

		const data = await response.json();

		if (!response.ok) {
			console.debug('data', data);
			return setError(form, 'email', 'Invalid email or password');
		}
		console.log('data', data);
		return message(form, 'Registration successful');
		const { access_token, refresh_token } = data;
		return {
			status: 200,
			message: 'success'
		};
		if (!access_token) {
			throw new Error('No access token');
		}
		try {
			setAuthToken(cookies, { access_token, refresh_token });
		} catch (error) {}
		throw redirect(302, '/home');
	}
};

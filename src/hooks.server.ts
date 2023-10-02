import { redirect } from '@sveltejs/kit';
import { isAuthenticated } from './lib/auth/authStore';

export async function handle({ event, resolve }) {
	const authToken = event.cookies.get('authToken');
	const path = event.url.pathname;

	event.locals.authedUser = !!authToken;

	const unprotected = [
		'/',
		'/auth/sign-in',
		'/auth/sign-up',
		'/auth/forgot-password',
		'/auth/reset-password'
	];

	if (unprotected.includes(path) && authToken) {
		throw redirect(302, '/home');
	}

	if (unprotected.includes(path) || authToken) {
		const response = await resolve(event);

		return response;
	}
	throw redirect(302, '/auth/sign-in');
}

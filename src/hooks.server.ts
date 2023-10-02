import { redirect } from '@sveltejs/kit';
import { isAuthenticated } from './lib/auth/authStore';

export async function handleFetch({ request, fetch, event }) {
	const access_token = event.cookies.get('access_token');
	request.headers.set('authorization', 'Bearer ' + access_token);

	return fetch(request);
}
export async function handle({ event, resolve }) {
	const access_token = event.cookies.get('access_token');
	const path = event.url.pathname;

	event.locals.authedUser = !!access_token;

	const unprotected = [
		'/',
		'/auth/sign-in',
		'/auth/sign-up',
		'/auth/forgot-password',
		'/auth/reset-password'
	];

	if (unprotected.includes(path) && access_token) {
		throw redirect(302, '/home');
	}

	if (unprotected.includes(path) || access_token) {
		const response = await resolve(event);

		return response;
	}
	throw redirect(302, '/auth/sign-in');
}

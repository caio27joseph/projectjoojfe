import type { Actions, RequestEvent } from '@sveltejs/kit';

export const actions: Actions = {
	logout: async (event: RequestEvent) => {
		event.cookies.delete('access_token', {
			path: '/'
		});
		event.cookies.delete('refresh_token', {
			path: '/'
		});
	}
};

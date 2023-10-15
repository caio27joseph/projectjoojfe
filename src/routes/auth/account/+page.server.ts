import { deleteAuthToken } from '$lib/auth/tokens';
import type { Actions, RequestEvent } from '@sveltejs/kit';

export const actions: Actions = {
	logout: async (event: RequestEvent) => {
		deleteAuthToken(event.cookies);
	}
};

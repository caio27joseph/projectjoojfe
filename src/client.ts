import { HoudiniClient } from '$houdini';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { subscription } from '$houdini/plugins';
import { getAuthToken } from '$lib/auth/tokens';
import type { ClientPluginContext } from '$houdini/runtime/client/documentStore';
import { API_URL, GRAPHQL_WS } from '$env/static/private';

function getAccessTokenFromCookies() {
	const cookieStr = document.cookie;
	const cookies = Object.fromEntries(cookieStr.split('; ').map((c) => c.split('=')));
	return cookies.access_token || null;
}

function createClient({ session }: ClientPluginContext) {
	const client = new SubscriptionClient(GRAPHQL_WS, {
		reconnect: true,
		connectionParams: {
			authorization: `Bearer ${session?.access_token}`
		}
	});

	return {
		subscribe(payload: any, handlers: any) {
			const { unsubscribe } = client.request(payload).subscribe(handlers);
			return unsubscribe;
		}
	};
}

export default new HoudiniClient({
	url: API_URL + '/graphql',
	plugins: [subscription(createClient)],
	fetchParams({ session }) {
		return {
			headers: {
				Authorization: `Bearer ${session?.access_token}`
			}
		};
	}
});

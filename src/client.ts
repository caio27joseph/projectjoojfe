import { HoudiniClient } from '$houdini';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { subscription } from '$houdini/plugins';
import { getAuthToken } from '$lib/auth/tokens';
import type { ClientPluginContext } from '$houdini/runtime/client/documentStore';

function getAccessTokenFromCookies() {
	const cookieStr = document.cookie;
	const cookies = Object.fromEntries(cookieStr.split('; ').map((c) => c.split('=')));
	return cookies.access_token || null;
}

function createClient({ session }: ClientPluginContext) {
	const client = new SubscriptionClient('ws://localhost:3050/graphql', {
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
	url: 'http://localhost:3050/graphql',
	plugins: [subscription(createClient)],
	fetchParams({ session }) {
		return {
			headers: {
				Authorization: `Bearer ${session?.access_token}`
			}
		};
	}
});

import { HoudiniClient } from '$houdini';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { subscription } from '$houdini/plugins';
import type { ClientPluginContext } from '$houdini/runtime/client/documentStore';

const VITE_GRAPHQL_WS = import.meta.env.VITE_GRAPHQL_WS;
const VITE_API_URL = import.meta.env.VITE_API_URL;

function createClient({ session }: ClientPluginContext) {
	const client = new SubscriptionClient(VITE_GRAPHQL_WS, {
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
	url: VITE_API_URL + '/graphql',
	plugins: [subscription(createClient)],
	fetchParams({ session }) {
		return {
			headers: {
				Authorization: `Bearer ${session?.access_token}`
			}
		};
	}
});

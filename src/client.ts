import { HoudiniClient } from '$houdini';

import { SubscriptionClient } from 'subscriptions-transport-ws';
import { subscription } from '$houdini/plugins';
import type { ClientPluginContext } from '$houdini/runtime/client/documentStore';

const VITE_GRAPHQL_ENDPOINT_WS = import.meta.env.VITE_GRAPHQL_ENDPOINT_WS;
const VITE_GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT;

function createClient({ session }: ClientPluginContext) {
	console.info('Creating ws client, for path', VITE_GRAPHQL_ENDPOINT_WS);
	const client = new SubscriptionClient(VITE_GRAPHQL_ENDPOINT_WS, {
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
	url: VITE_GRAPHQL_ENDPOINT,
	plugins: [],
	fetchParams({ session }) {
		return {
			headers: {
				Authorization: `Bearer ${session?.access_token}`
			}
		};
	}
});

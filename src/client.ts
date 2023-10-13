import { HoudiniClient } from '$houdini';

import { createClient } from 'graphql-ws';
import { subscription } from '$houdini/plugins';
export default new HoudiniClient({
	url: 'http://localhost:3050/graphql',
	plugins: [
		subscription(() =>
			createClient({
				url: 'ws://api.url'
			})
		)
	]
});

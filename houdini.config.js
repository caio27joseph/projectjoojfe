/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'env:API_URL' + '/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;

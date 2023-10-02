import { graphql } from '$houdini';

export const load = async (event) => {
	const store = graphql(`
		query Table($id: ID!) {
			findTable(id: $id) {
				id
				title
				imageUrl
			}
		}
	`);
	const res = await store.fetch({
		event,
		variables: {
			id: event.params.id
		}
	});
	const data = res.data;

	if (!data?.findTable) {
		return {
			status: 404
		};
	}
	console.log('loading table', data?.findTable.title);
	return {
		table: data?.findTable
	};
};

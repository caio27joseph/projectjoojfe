import { graphql } from '$houdini';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const id = event.params.id;

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

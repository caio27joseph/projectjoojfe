import { graphql } from '$houdini';

export const load = async (event) => {
	const store = graphql(`
		query TableSettings($id: ID!) {
			findTable(id: $id) {
				id
				title
				imageUrl
				description
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
	return {
		table: data?.findTable
	};
};

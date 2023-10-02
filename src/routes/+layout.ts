import { graphql } from '$houdini';

export async function load(event) {
	const store = graphql(`
		query MyTables {
			myTables {
				id
				title
				imageUrl
			}
		}
	`);
	const res = await store.fetch({
		event
	});
	const data = res.data;
	return {
		myTables: data?.myTables ?? []
	};
}

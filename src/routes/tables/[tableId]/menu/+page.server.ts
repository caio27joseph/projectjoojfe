import { graphql } from '$houdini';
import { fail, type Actions, type RequestEvent, redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const store = graphql(`
		query TableSettings($where: WhereInput!) {
			findTable(where: $where) {
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
			where: { id: event.params.id }
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

export const actions: Actions = {
	updateTable: async (event) => {
		const form = await event.request.formData();
		const id = event.params.id;
		if (!id) {
			throw redirect(302, '/home');
		}
		const title = form.get('title')?.toString() || undefined;
		const imageUrl = form.get('imageUrl')?.toString() || undefined;
		const description = form.get('description')?.toString() || undefined;

		const mutation = graphql(`
			mutation UpdateTable($where: WhereInput!, $input: UpdateTableInput!) {
				updateTable(where: $where, input: $input) {
					title
					imageUrl
				}
			}
		`);

		const res = await mutation.mutate(
			{
				where: {
					id
				},
				input: {
					title,
					imageUrl,
					description
				}
			},
			{
				event
			}
		);
		// TODO: error handling
	},
	deleteTable: async (event) => {
		const tableId = event.params.tableId;
		if (!tableId) {
			throw redirect(302, '/home');
		}

		const mutation = graphql(`
			mutation RemoveTable($where: WhereInput!) {
				removeTable(where: $where) {
					id
					title
					imageUrl
				}
			}
		`);

		const res = await mutation.mutate(
			{
				where: {
					id: tableId
				}
			},
			{
				event
			}
		);
		if (res.data?.removeTable) {
			throw redirect(302, '/home');
		}
		// TODO: error handling
	}
};

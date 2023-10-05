import { graphql } from '$houdini';
import { getModalStore } from '@skeletonlabs/skeleton';
import { type Actions, type RequestEvent, fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	createTable: async (event: RequestEvent<{ title?: string; imageUrl?: string }>) => {
		const form = await event.request.formData();
		const title = form.get('title')?.toString() ?? '';
		const imageUrl = form.get('imageUrl')?.toString();

		const mutation = graphql(`
			mutation CreateTable($input: CreateTableInput!) {
				createTable(input: $input) {
					id
					title
					imageUrl
				}
			}
		`);
		const res = await mutation.mutate(
			{
				input: {
					title,
					imageUrl
				}
			},
			{
				event
			}
		);

		const data = res.data;
		if (!data?.createTable) {
			return fail(400, {
				message: 'Invalid email or password'
			});
		}

		throw redirect(302, `/tables/${data.createTable.id}`);
	}
};
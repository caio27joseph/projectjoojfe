import { graphql } from '$houdini';
import { TableProvider } from '$lib/table/TableProvider';
import { getModalStore } from '@skeletonlabs/skeleton';
import { type Actions, type RequestEvent, fail, redirect } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { createTableSchema } from './schemas';

export const actions: Actions = {
	createTable: async (event: RequestEvent<{ title?: string; imageUrl?: string }>) => {
		const form = await superValidate(event, createTableSchema);
		if (!form.valid) {
			return fail(400, { form });
		}
		const tableProvider = new TableProvider(event);

		const res = await tableProvider.createTable(form.data);

		const data = res.data;
		if (!data?.createTable) {
			return setError(form, 'title', 'TODO: Error message');
		}

		throw redirect(302, `/tables/${data.createTable.id}`);
	}
};

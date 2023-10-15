import type { QueryResult } from '$houdini';
import { TableProvider } from '$lib/table/TableProvider.js';
import { BadRequestError, hydrateError } from '$lib/validation/tranform-error.js';
import { redirect } from '@sveltejs/kit';

const validate = (res: QueryResult) => {
	const errors = res.errors;
	if (!errors || !errors.length) {
		return;
	}
	for (const e of errors) {
		const error = hydrateError(e);
		if (error instanceof BadRequestError) {
			throw redirect(302, '/home');
		}
	}
};

export const load = async (event) => {
	const id = event.params.id;

	const tableProvider = new TableProvider(event);

	const res = await tableProvider.fetchTable(id);

	const table = res.data?.findTable;
	const libraries = res.data?.tableLibraries ?? [];
	validate(res);
	const data = res.data;

	if (!data?.findTable) {
		return {
			status: 404
		};
	}
	return {
		table,
		libraries
	};
};

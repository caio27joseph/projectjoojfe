import type { QueryResult } from '$houdini';
import { TableProvider } from '$lib/table/TableProvider.js';
import { BadRequestError, hydrateError } from '$lib/validation/tranform-error.js';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const tableId = event.params.tableId;

	const tableProvider = new TableProvider(event);

	const res = await tableProvider.fetchTable(tableId);

	const table = res.data?.findTable;
	const libraries = res.data?.tableLibraries ?? [];

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

import { graphql } from '$houdini';
import { TableProvider } from '$lib/table/TableProvider.js';

export async function load(event) {
	const tableProvider = new TableProvider(event);

	const myTables = await tableProvider.fetchMyTables();

	return {
		myTables
	};
}

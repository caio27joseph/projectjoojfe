import { graphql } from '$houdini';
import { TableProvider } from '$lib/table/TableProvider.js';
import { writable } from 'svelte/store';

const libraries = writable({});

export async function load(event) {
	const tableProvider = new TableProvider(event);

	const myTables = await tableProvider.fetchMyTables();

	return {
		myTables
	};
}

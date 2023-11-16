import { graphql } from '$houdini';
import { TableProvider } from '$lib/table/TableProvider.js';
import { writable } from 'svelte/store';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { createTableSchema } from './tables/schemas';

export async function load(event) {
	const tableProvider = new TableProvider(event);

	const myTables = await tableProvider.fetchMyTables();

	const createTableForm = await superValidate(createTableSchema);

	return {
		myTables,
		createTableForm
	};
}

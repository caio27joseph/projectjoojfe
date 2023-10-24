import { LibraryProvider, selectedLibraryId } from '$lib/table/LibraryProvider.js';
import { get } from 'svelte/store';

export const load = async (event) => {
	const libraryProvider = new LibraryProvider(event);

	const events = libraryProvider.events({});

	$: events.listen();

	const tableId = event.params.tableId;
	const libraryId = event?.url?.searchParams.get('libraryId');
	if (libraryId) {
		selectedLibraryId.update((map) => {
			map[tableId] = libraryId;
			return map;
		});
	}

	return {
		...event.data,
		libraryEvents: events
	};
};

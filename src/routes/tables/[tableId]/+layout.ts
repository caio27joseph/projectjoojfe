import { graphql } from '$houdini';
import { LibraryProvider } from '$lib/table/LibraryProvider.js';

export const load = async (event) => {
	const libraryProvider = new LibraryProvider(event);

	const events = await libraryProvider.events({});

	$: events.listen();

	return {
		...event.data,
		libraryEvents: events
	};
};

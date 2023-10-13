import { LibraryProvider } from '$lib/table/LibraryProvider';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createDirectory: async (event) => {
		const form = await event.request.formData();

		const name = form.get('name')?.toString() ?? '';
		const parentId = form.get('parentId')?.toString() || undefined;
		const libraryId = form.get('libraryId')?.toString() ?? '';

		const body = {
			name,
			parentId,
			libraryId
		};

		const libraryProvider = new LibraryProvider(event);

		const res = await libraryProvider.createDirectory(body);

		res.data?.addDirectory;

		console.log(res);

		return {
			status: 200,
			body: {
				message: 'Directory Created'
			}
		};
	}
};

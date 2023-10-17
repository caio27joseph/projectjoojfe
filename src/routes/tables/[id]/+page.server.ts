import { graphql } from '$houdini';
import { LibraryProvider } from '$lib/table/LibraryProvider';
import { cleanFormData } from '$lib/utils';
import { fail, type Actions } from '@sveltejs/kit';
import { ZodError, z } from 'zod';

const createDirectory = z.object({
	name: z.string().min(2).max(16),
	parentId: z.string().uuid().optional(),
	libraryId: z.string().uuid()
});

export const actions: Actions = {
	createDirectory: async (event) => {
		const form = cleanFormData(await event.request.formData());

		try {
			const result = createDirectory.parse(form);

			const libraryProvider = new LibraryProvider(event);

			const res = await libraryProvider.createDirectory(result);
			return {
				status: 201,
				data: result
			};
		} catch (error) {
			if (error instanceof ZodError) {
				const { fieldErrors: errors } = error.flatten();
				return fail(400, {
					data: form,
					errors
				});
			}
		}
	}
};

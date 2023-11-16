import { LibraryProvider } from '$lib/table/LibraryProvider.js';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
	const libraryProvider = new LibraryProvider(event);

	const res = await libraryProvider.fetchArticle({
		articleId: event.params.articleId
	});

	const article = res.data?.article;
	if (!article) {
		throw error(404, {
			message: 'Article not found'
		});
	}
	return {
		article
	};
};

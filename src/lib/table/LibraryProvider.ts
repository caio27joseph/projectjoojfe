import { graphql, type TableInfo$result } from '$houdini';
import { writable } from 'svelte/store';

export const selectedLibraryId = writable<{
	[key: string]: string;
}>({});
export const selectedLibrary = writable<TableInfo$result['tableLibraries'][0]>();

export class LibraryProvider {
	constructor(private readonly event: any) {}

	createDirectory({
		libraryId,
		name,
		parentId
	}: {
		name: string;
		libraryId: string;
		parentId?: string | undefined;
	}) {
		const store = graphql(`
			mutation CreateDirectory($libraryId: ID!, $name: String!, $parentId: String) {
				addDirectory(where: { id: $libraryId }, input: { name: $name, parentId: $parentId }) {
					id
					root {
						id
						name
					}
				}
			}
		`);

		const res = store.mutate(
			{
				libraryId,
				name,
				parentId
			},
			{
				event: this.event
			}
		);
		return res;
	}

	events({}) {
		const store = graphql(`
			subscription LibraryEvents {
				libraryEvent {
					created {
						id
						name
						icon
						root {
							id
							name
							parentId
						}
						articles {
							id
							name
							parentId
						}
					}
					updated {
						id
						name
						icon
						root {
							id
							name
							parentId
						}
						articles {
							id
							name
							parentId
						}
					}
					removed {
						id
						name
					}
				}
			}
		`);

		return store;
	}

	fetchArticle({ articleId }: { articleId: string }) {
		const store = graphql(`
			query Article($articleId: ID!) {
				article(where: { id: $articleId }) {
					id
					name
					parentId
				}
			}
		`);

		const res = store.fetch({
			variables: {
				articleId
			},
			event: this.event
		});
		return res;
	}
}

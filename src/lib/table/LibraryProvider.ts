import { graphql } from '$houdini';

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
}

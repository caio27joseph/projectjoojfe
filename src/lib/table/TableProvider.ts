import { graphql, type CreateTable$input } from '$houdini';

export class TableProvider {
	constructor(private readonly event: any) {}

	async fetchMyTables() {
		const store = graphql(`
			query MyTables {
				myTables {
					id
					title
					imageUrl
				}
			}
		`);
		const res = await store.fetch({
			event: this.event
		});

		const data = res.data;

		return data?.myTables ?? [];
	}
	async fetchTable(id: string) {
		const store = graphql(`
			query TableInfo($id: ID!) {
				findTable(where: { id: $id }) {
					id
					title
					imageUrl
				}
				tableLibraries(where: { tableId: $id }) {
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
			}
		`);
		const res = await store.fetch({
			event: this.event,
			variables: {
				id
			}
		});
		return res;
	}

	async createTable(input: CreateTable$input['input']) {
		const mutation = graphql(`
			mutation CreateTable($input: CreateTableInput!) {
				createTable(input: $input) {
					id
					title
					imageUrl
				}
			}
		`);
		const res = await mutation.mutate(
			{
				input
			},
			{
				event: this.event
			}
		);
		return res;
	}
}

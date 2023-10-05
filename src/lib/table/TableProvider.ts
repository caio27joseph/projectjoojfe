import { graphql } from '$houdini';

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
}

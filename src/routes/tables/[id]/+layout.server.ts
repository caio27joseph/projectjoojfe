import { graphql, type QueryResult, type Table$input, type Table$result } from '$houdini';
import { BadRequestError, hydrateError } from '$lib/validation/tranform-error.js';
import { redirect } from '@sveltejs/kit';

const validate = (res: QueryResult<Table$result, Table$input>) => {
	const errors = res.errors;
	if (!errors || !errors.length) {
		return;
	}
	for (const e of errors) {
		const error = hydrateError(e);
		if (error instanceof BadRequestError) {
			throw redirect(302, '/home');
		}
	}
};

export const load = async (event) => {
	const id = event.params.id;

	const store = graphql(`
		query Table($where: WhereInput!) {
			findTable(where: $where) {
				id
				title
				imageUrl
			}
		}
	`);
	const res = await store.fetch({
		event,
		variables: {
			where: {
				id
			}
		}
	});
	validate(res);
	const data = res.data;

	if (!data?.findTable) {
		return {
			status: 404
		};
	}
	return {
		table: data?.findTable
	};
};

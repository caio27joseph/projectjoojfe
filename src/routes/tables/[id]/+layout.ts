import { graphql } from '$houdini';

export const load = async (event) => {
	const update = graphql(`
		subscription DirectoryADded {
			directoryAdded {
				id
				name
				icon
				root {
					id
					name
					parentId
				}
			}
		}
	`);
	$: update.listen();

	return {
		update,
		...event.data
	};
};

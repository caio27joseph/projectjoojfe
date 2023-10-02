// import {
// 	myTablesDocument,
// 	type myTables,
// 	type myTablesVariables,
// 	type Table
// } from '~/graphql/types';
// import client from '~/apolloClient';
// 3;

// export async function load({ params }) {
// 	try {
// 		const { data } = await client.query<myTables, myTablesVariables>({
// 			query: myTablesDocument,
// 			variables: {}
// 		});
// 		return data.table as Table;
// 	} catch (error: any) {}
// }

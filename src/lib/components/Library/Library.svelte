<script lang="ts">
	import type { TableInfo$result } from '$houdini';
	import type { Dir } from '$lib/types';
	import DirActions from './DirActions.svelte';
	import Directory from './Directory.svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { groupBy } from 'lodash';

	export let table: TableInfo$result['findTable'];
	export let library: TableInfo$result['tableLibraries'][1];
	export let hidden: boolean = false;

	const makeRoot = (library: TableInfo$result['tableLibraries'][0]) => {
		const dirByParent = groupBy(library.root ?? [], 'parentId');
		const makeTree = (
			dir: Dir | { id: string; name: string; parentId: string; directories?: Dir[] }
		) => {
			dir.directories = dirByParent[dir.id] || [];
			for (const child of dir.directories) {
				makeTree(child);
			}
		};
		const rootDirs = dirByParent['null'] || [];
		for (const dir of rootDirs) {
			makeTree(dir);
		}
		return rootDirs as Dir[];
	};
	$: dirs = makeRoot(library);
</script>

<div class="container p-2 pt-0 {hidden ? 'hidden' : ''}">
	<div class="actions flex items-center justify-between pt-2 px-4">
		<h1 class="text-sm text-gray-300">{library.name}</h1>
		<DirActions {table} {library} />
	</div>
	<TreeView padding="p-0">
		{#each dirs as directory}
			<Directory {table} {directory} {library} />
		{/each}
		{#each library.articles?.filter((a) => !a.parentId) || [] as article}
			<TreeViewItem>{article.name}</TreeViewItem>
		{/each}
	</TreeView>
</div>

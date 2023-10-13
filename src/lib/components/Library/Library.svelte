<script lang="ts">
	import type { TableInfo$result } from '$houdini';
	import DirActions from './DirActions.svelte';
	import Directory from './Directory.svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { groupBy } from 'lodash';

	export let table: TableInfo$result['findTable'];
	export let library: TableInfo$result['tableLibraries'][1];
	const root = library?.root ?? [];
	export let hidden = false;

	const dirByParent = groupBy(root, 'parentId');

	const dirs: IDirectory[] = dirByParent['null'] || [];

	const addChilds = (dir: IDirectory) => {
		dir.directories = dirByParent[dir.id];
		for (const child of dir.directories ?? []) {
			addChilds(child);
		}
	};
	for (const dir of dirs) {
		addChilds(dir);
	}

	const editMode = true;
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
		<!-- {#each root.articles || [] as article}
			<TreeViewItem>{article.name}</TreeViewItem>
		{/each} -->
	</TreeView>
</div>

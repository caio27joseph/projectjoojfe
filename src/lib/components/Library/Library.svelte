<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedDirectory } from './store';
	import Directory from './Directory.svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { groupBy } from 'lodash';

	export let root: {
		readonly id: string;
		readonly name: string;
		readonly parentId?: string | null;
	}[];

	const dirByParent = groupBy(root, 'parentId');

	let selectedDirName: string | null;

	const dirs: IDirectory[] = dirByParent['null'];
	const addChilds = (dir: IDirectory) => {
		dir.directories = dirByParent[dir.id];
		for (const child of dir.directories ?? []) {
			addChilds(child);
		}
	};
	for (const dir of dirs) {
		addChilds(dir);
	}

	// Subscribe to the store
	onMount(() => {
		const unsubscribe = selectedDirectory.subscribe((value) => {
			selectedDirName = value;
		});

		return unsubscribe; // Unsubscribe when the component is destroyed
	});
</script>

<div class="container p-2">
	<TreeView padding="p-1.5" spacing="0">
		{#each dirs || [] as directory}
			<Directory {directory} />
		{/each}
		<!-- {#each root.articles || [] as article}
			<TreeViewItem>{article.name}</TreeViewItem>
		{/each} -->
	</TreeView>
</div>

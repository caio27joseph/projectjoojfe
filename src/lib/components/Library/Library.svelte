<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedDirectory } from './store';
	import Directory from './Directory.svelte';
	import { ListBox, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';

	export let root: IDirectory;

	let selectedDirName: string | null;

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
		{#each root.directories || [] as directory}
			<Directory {directory} />
		{/each}
		{#each root.articles || [] as article}
			<TreeViewItem>{article.name}</TreeViewItem>
		{/each}
	</TreeView>
</div>

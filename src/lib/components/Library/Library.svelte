<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedDirectory } from './store';
	import Directory from './Directory.svelte';
	import { ListBox } from '@skeletonlabs/skeleton';

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

<div class="container py-2">
	{#each root.directories || [] as directory}
		<Directory {directory} layer={1} />
	{/each}
</div>

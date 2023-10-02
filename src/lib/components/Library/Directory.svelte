<script lang="ts">
	import { TreeViewItem } from '@skeletonlabs/skeleton';
	// export let layer: number;
	export let directory: IDirectory;
	let isOpen = false;
	$: iconPath = isOpen ? 'open_dir.svg' : 'closed_dir.svg';

	const directories = directory?.directories || [];
	const articles = directory?.articles || [];

	const toggleOpen = () => {
		isOpen = !isOpen;
	};

	// Handle the keydown event for accessibility
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			// Space or Enter key
			toggleOpen();
			event.preventDefault();
		}
	};
</script>

<TreeViewItem>
	{directory.name}
	<!-- <svelte:fragment slot="lead">(Icon)</svelte:fragment> -->
	<svelte:fragment slot="children">
		{#each directories as directory}
			<svelte:self {directory} />
		{/each}
		{#each articles as article}
			<TreeViewItem>{article.name}</TreeViewItem>
		{/each}
	</svelte:fragment>
</TreeViewItem>

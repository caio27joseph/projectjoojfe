<script lang="ts">
	import { selectedDirectory } from './store';
	export let layer: number;
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

<div class="container flex flex-col space-y-0.5 px-4 py-1">
	<div
		class="directory flex m-0.5 space-x-1"
		role="button"
		tabindex="0"
		on:click={toggleOpen}
		on:keydown={handleKeyDown}
	>
		<img class="h-6 w-4" src="/icons/{iconPath}" alt="" />
		<h1>{directory.name}</h1>
	</div>

	{#if isOpen}
		<div class="children pl-{1 * layer}">
			{#if directories.length > 0}
				{#each directories as dir}
					<svelte:self directory={dir} {layer} />
				{/each}
			{/if}
			{#if articles.length > 0}
				{#each articles as article}
					<div class="flex m-0.5 space-x-1 py-1">
						<span class="h-6 w-4" />
						<h1 class="text-secondary-200">{article.name}</h1>
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</div>

<style>
	.directory {
		cursor: pointer;
	}
</style>

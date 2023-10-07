<script lang="ts">
	import Library from '$lib/components/Library/Library.svelte';
	import { page } from '$app/stores';
	import type { TableInfo$result } from '$houdini';

	import Icon from '@iconify/svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	export let libraries: TableInfo$result['tableLibraries'];
	let selectedLibrary = 0;
	let root: any = null;
	$: root = libraries[selectedLibrary]?.root;
	export let table: TableInfo$result['findTable'];
</script>

<div>
	<a
		href={$page.url.pathname + '/menu'}
		class="table-info flex font-bold py-0 !h-44"
		style="background-image: url({table.imageUrl});"
	>
		<h1 class="text-2xl p-3 pt-10 w-full bg-gradient-to-t from-black">
			{table.title}
		</h1>
	</a>
	<div class="library-hub pt-6 pb-2 px-2">
		<h1 class="text-primary-500 px-4">Bibliotecas</h1>
		<div class="hub-options">
			<ListBox>
				{#each libraries as library, i}
					<!-- content here -->
					<ListBoxItem padding="0" bind:group={selectedLibrary} name={library.name} value={i}>
						<div class="flex px-4 py-2 items-center">
							<Icon
								icon="material-symbols:menu-book-outline-rounded"
								width="20"
								height="28"
								class="text-tertiary-500"
							/>
							<h1 class="ml-1">{library.name}</h1>
						</div>
					</ListBoxItem>
				{/each}
				<!-- <div class="navigation-item flex px-4 py-2 space-x-1">
						<Icon
							icon="material-symbols:menu-book-outline-rounded"
							width="16"
							height="24"
							class="text-tertiary-500"
						/>
						<h1>{library.name}</h1>
						<ListBoxItem bind:group={valueSingle} name="medium" value="movies">Movies</ListBoxItem>
						<ListBoxItem bind:group={valueSingle} name="medium" value="tv">TV</ListBoxItem>
					</div> -->
			</ListBox>
		</div>
	</div>
	{#if root && root?.length > 0}
		<Library {root} />
	{/if}
</div>

<style>
	.table-info {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		position: relative;
		align-items: end;
	}
	.library-hub {
		border-bottom: 0.1px solid #ffffff40;
	}
</style>

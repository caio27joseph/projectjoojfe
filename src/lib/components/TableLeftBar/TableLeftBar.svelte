<script lang="ts">
	import Library from '$lib/components/Library/Library.svelte';
	import Icon from '@iconify/svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { TableInfo$result } from '$houdini';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	export let libraries: TableInfo$result['tableLibraries'];
	export let table: TableInfo$result['findTable'];

	let selectedLibraryId = writable<string | undefined>(libraries?.[0]?.id);
</script>

<div>
	<a
		href="/tables/{table.id}/menu"
		class="table-info flex font-bold py-0 !h-44"
		style="background-image: url({table?.imageUrl || '/images/table_placeholder.jpg'});"
	>
		<h1 class="text-2xl text-primary-100 p-3 pt-10 w-full bg-gradient-to-t from-black">
			{table.title}
		</h1>
	</a>
	<div class="library-hub pt-6 pb-2 px-2">
		<h1 class="text-primary-500 px-4 text-base">Bibliotecas</h1>
		<div class="hub-options pt-4">
			<ListBox>
				{#each libraries as library, i (library.id)}
					<ListBoxItem
						padding="0"
						bind:group={$selectedLibraryId}
						name={library.name}
						value={library.id}
						active="bg-surface-900"
					>
						<div class="flex px-4 py-2 items-center">
							<Icon
								icon="material-symbols:menu-book-outline-rounded"
								width="20"
								height="28"
								class="text-tertiary-500"
							/>
							<h2 class="ml-1 text-base">{library.name}</h2>
						</div>
					</ListBoxItem>
				{/each}
			</ListBox>
		</div>
	</div>
	{#each libraries as library}
		<Library {table} {library} hidden={library.id !== $selectedLibraryId} />
	{/each}
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

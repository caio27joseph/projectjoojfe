<script lang="ts">
	import Library from '$lib/components/Library/Library.svelte';
	import { page } from '$app/stores';

	import Icon from '@iconify/svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { TableInfo$result } from '$houdini';

	export let libraries: TableInfo$result['tableLibraries'];
	let selectedLibrary = 0;
	export let table: TableInfo$result['findTable'];
</script>

<div>
	<a
		href={$page.url.pathname + '/menu'}
		class="table-info flex font-bold py-0 !h-44"
		style="background-image: url({table?.imageUrl || '/images/table_placeholder.jpg'});"
	>
		<h1 class="text-2xl p-3 pt-10 w-full bg-gradient-to-t from-black">
			{table.title}
		</h1>
	</a>
	<div class="library-hub pt-6 pb-2 px-2">
		<h1 class="text-primary-500 px-4">Bibliotecas</h1>
		<div class="hub-options pt-4">
			<ListBox>
				{#each libraries as library, i (library.id)}
					<ListBoxItem
						padding="0"
						bind:group={selectedLibrary}
						name={library.name}
						value={i}
						active="bg-surface-900"
					>
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
			</ListBox>
		</div>
	</div>
	{#each libraries as library, i}
		<Library {table} {library} hidden={i !== selectedLibrary} />
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

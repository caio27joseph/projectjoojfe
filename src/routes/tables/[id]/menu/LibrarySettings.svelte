<script lang="ts">
	import type { TableInfo$result } from '$houdini/artifacts/TableInfo';
	import Library from '$lib/components/Library/Library.svelte';
	import Icon from '@iconify/svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	export let libraries: TableInfo$result['tableLibraries'];
	export let table: TableInfo$result['findTable'];
	let selectedLibrary = 0;

	$: library = libraries[selectedLibrary];
</script>

<div>
	<div class="header flex justify-between">
		<div class="left">
			<h1 class=" text-2xl font-bold text-secondary-400">Configurações da Biblioteca</h1>
			<span>Detalhes na configuracao de bibliotecas'</span>
		</div>
		<form class="right" method="POST">
			<button class="btn btn-primary variant-ghost-success" formaction="?/updateTable" />
		</form>
	</div>
	<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
	<div class="content">
		<div class="core variant-ghost-surface py-8 px-4 max-w-2xl">
			<h2 class="text-2xl">1. Informações Gerais</h2>
			<div class="libraries">
				<ListBox>
					{#each libraries as library, i}
						<ListBoxItem
							padding="0"
							bind:group={selectedLibrary}
							name={library.name}
							value={i}
							active="bg-surface-700"
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
			<div class="option text-lg">
				{#if library}
					<Library {table} {library} />
				{/if}
			</div>
		</div>
		<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
	</div>
</div>

<style>
	.option {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

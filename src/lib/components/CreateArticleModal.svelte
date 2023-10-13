<script lang="ts">
	import type { CreateTable$input, TableInfo$result } from '$houdini';
	import { getInitials } from '$lib/utils';
	import { Avatar, ListBox, ListBoxItem, getModalStore } from '@skeletonlabs/skeleton';
	import TableCard from './TableCard.svelte';
	import Icon from '@iconify/svelte';
	import { applyAction, enhance } from '$app/forms';

	export let table: TableInfo$result['findTable'];
	let valueSingle: string = 'Directory';
	let name: string;
	export let directory: {
		name: string;
		id: string;
	} | null = null;

	export let library: {
		name: string;
		id: string;
	};
	const store = getModalStore();
</script>

<div class="card card-hover p-4 !bg-surface-500">
	<header class="card-header">
		<h1 class="text-2xl font-bold text-secondary-400">Adicinar a Biblioteca</h1>
		{#if directory}
			<h1 class="text-sm text-gray-400">Adicionando em {directory.name}</h1>
		{/if}
		<span>Escolha que tipo de elemento vai adicionar</span>
		<div class="options p-4">
			<ListBox active="bg-surface-900 w-full">
				<ListBoxItem bind:group={valueSingle} name="medium" value="Directory">
					<svelte:fragment slot="lead">
						<Icon icon="material-symbols:create-new-folder-outline" width="20" height="20" />
					</svelte:fragment>
					<h1>Diretorio</h1>
				</ListBoxItem>
				<ListBoxItem bind:group={valueSingle} name="medium" value="Article">
					<svelte:fragment slot="lead">
						<Icon icon="material-symbols:library-books-outline-rounded" width="20" height="20" />
					</svelte:fragment>
					<h1>Artigo</h1>
				</ListBoxItem>
			</ListBox>
		</div>
	</header>
	<section class="p-4">
		<form
			class="m-8"
			method="POST"
			action="/tables/{table.id}?/createDirectory"
			use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
				formData.set('parentId', directory?.id ?? '');
				formData.set('libraryId', library?.id ?? '');

				return async ({ result, update }) => {
					store.close();
					return applyAction(result);
				};
			}}
		>
			<div class="flex-grow flex flex-col space-y-6">
				<label class="block">
					<input
						name="name"
						bind:value={name}
						class="form-input input block w-full"
						type="text"
						placeholder="Table Name"
					/>
				</label>
			</div>
			<div class="actions p-6">
				<button type="submit" class="w-full rounded-lg shadow-md variant-ghost-success p-2">
					Create
				</button>
			</div>
		</form>
	</section>
</div>

<style>
</style>

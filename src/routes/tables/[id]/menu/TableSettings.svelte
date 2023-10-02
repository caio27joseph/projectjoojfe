<script lang="ts">
	import { page } from '$app/stores';
	import TableCard from '$lib/components/TableCard.svelte';
	import type { TableSettings$result } from '$houdini';

	const id = $page.params.id;

	export let table: TableSettings$result['findTable'];

	const body = table;
</script>

<div>
	<div class="header">
		<h1 class=" text-2xl font-bold text-secondary-400">Editar Mesa da Mesa</h1>
		<span>Atualiza a configuracao de sua mesa aqui</span>
	</div>
	<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
	<form class="flex flex-col space-y-4">
		<div class="core variant-ghost-surface py-8 px-4">
			<h2 class="text-lg">1. Informações Gerais</h2>
			<div class="form-group">
				<div class="column1 space-y-2">
					<label class="label">
						<span class="pl-3">Nome da Mesa</span>
						<input class="input" type="text" bind:value={body.title} placeholder="Nome da Mesa" />
					</label>
					<label class="label">
						<span class="pl-3">Capa da Mesa</span>
						<input
							class="input"
							type="text"
							bind:value={body.imageUrl}
							placeholder="url da imagem"
						/>
					</label>
					<label class="label">
						<span class="pl-3">Descrição da Mesa</span>
						<textarea
							class="textarea"
							bind:value={body.description}
							rows="4"
							placeholder="Escreva aqui"
						/>
					</label>
				</div>
				<div class="preview variant-outline-tertiary rounded-lg p-4">
					<h3 class="text-xl text-tertiary-500">Preview</h3>
					<TableCard
						{id}
						title={body.title || table.title}
						img={body.imageUrl || table.imageUrl || ''}
						disabled={true}
					/>
				</div>
			</div>
		</div>
		<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
		<div class="core">
			<label class="label">
				<span> Nome da Mesa</span>
				<input class="input" type="text" placeholder="Nome da Mesa" />
			</label>
		</div>
	</form>
</div>

<style>
	.form-group {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
</style>

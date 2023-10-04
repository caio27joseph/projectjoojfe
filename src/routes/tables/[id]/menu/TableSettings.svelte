<script lang="ts">
	import { page } from '$app/stores';
	import TableCard from '$lib/components/TableCard.svelte';
	import type { TableSettings$result, UpdateTable$input, UpdateTable$result } from '$houdini';

	const id = $page.params.id;

	export let table: TableSettings$result['findTable'];

	const body: UpdateTable$input['input'] = {};
</script>

<div>
	<form method="POST">
		<div class="header flex justify-between">
			<div class="left">
				<h1 class=" text-2xl font-bold text-secondary-400">Editar Mesa da Mesa</h1>
				<span>Atualiza a configuracao de sua mesa aqui</span>
			</div>
			<div class="right">
				<button class="btn btn-primary variant-ghost-success" formaction="?/updateTable"
					>Salvar</button
				>
			</div>
		</div>
		<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
		<div class="content">
			<div class="core variant-ghost-surface py-8 px-4">
				<h2 class="text-lg">1. Informações Gerais</h2>
				<div class="form-group">
					<div class="column1 space-y-2">
						<label class="label">
							<span class="pl-3">Nome da Mesa</span>
							<input
								name="title"
								class="input"
								type="text"
								bind:value={body.title}
								placeholder={table.title}
							/>
						</label>
						<label class="label">
							<span class="pl-3">Capa da Mesa (Url)</span>
							<input
								name="imageUrl"
								class="input"
								type="text"
								bind:value={body.imageUrl}
								placeholder={table.imageUrl}
							/>
						</label>
						<label class="label">
							<span class="pl-3">Descrição da Mesa</span>
							<textarea
								name="description"
								class="textarea"
								bind:value={body.description}
								rows="4"
								placeholder={table.description}
							/>
						</label>
					</div>
					<div class="preview">
						<h3 class="text-xl text-tertiary-500">Preview</h3>
						<div class="table-preview w-80 h-48">
							<TableCard
								{id}
								title={body.title || table.title}
								img={body.imageUrl || table.imageUrl || ''}
								disabled={true}
							/>
						</div>
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

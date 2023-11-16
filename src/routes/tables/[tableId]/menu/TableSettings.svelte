<script lang="ts">
	import { page } from '$app/stores';
	import TableCard from '$lib/components/TableCard.svelte';
	import type { TableSettings$result, UpdateTable$input } from '$houdini';
	import MarkdownEditor from '$lib/components/Editor/MarkdownEditor.svelte';

	export let table: TableSettings$result['findTable'];

	const body: UpdateTable$input['input'] = {};
</script>

<div>
	<form method="POST">
		<div class="header flex justify-between">
			<div class="left">
				<h1 class="text-2xl font-bold text-secondary-400">Editar Mesa da Mesa</h1>
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
						<div class="grid grid-cols-2">
							<label class="p-2">
								<span class="pl-3">Nome da Mesa</span>
								<input
									name="title"
									class="input"
									type="text"
									bind:value={body.title}
									placeholder={table.title}
								/>
							</label>
							<label class="p-2">
								<span class="pl-3">Sistema</span>
								<select class="select">
									<option value="1">D&D</option>
									<option value="2">Storyteller</option>
									<option value="3">GURPS</option>
									<option value="4">Tormenta</option>
									<option value="5">Outro</option>
								</select>
							</label>
						</div>
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
					</div>
					<div class="preview flex items-center flex-col">
						<h3 class="text-xl text-tertiary-500 p-4">Preview</h3>
						<div class="table-preview w-80 h-48">
							<TableCard
								title={body.title || table.title}
								img={body.imageUrl || table.imageUrl || ''}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="core variant-ghost-surface py-8 px-4">
				<h2 class="text-lg">2. Descricao da Mesa</h2>
				<span class="pl-3">Descrição da Mesa</span>
				<MarkdownEditor bind:description={body.description} />
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
		grid-template-columns: 2fr 1fr;
		grid-gap: 1rem;
	}
</style>

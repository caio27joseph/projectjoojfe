<script lang="ts">
	import { page } from '$app/stores';
	import TableCard from '$lib/components/TableCard.svelte';
	import type { TableSettings$result, UpdateTable$input, UpdateTable$result } from '$houdini';

	const id = $page.params.id;

	export let table: TableSettings$result['findTable'];
</script>

<div>
	<form method="POST">
		<div class="header flex justify-between">
			<div class="left">
				<h1 class=" text-2xl font-bold text-secondary-400">Zona de Perigo</h1>
				<span>Configuracoes Sensiveis da Mesa</span>
			</div>
			<div class="right">
				<button class="btn btn-primary variant-ghost-success" formaction="?/updateTable" />
			</div>
		</div>
		<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
		<div class="content">
			<div class="core variant-ghost-surface py-8 px-4 max-w-2xl">
				<h2 class="text-2xl">1. Informações Gerais</h2>
				<div class="option text-lg">
					<h1>Apagar a Mesa</h1>
					<button class="btn btn-primary variant-ghost-error" formaction="?/deleteTable">
						<span>Apagar</span>
					</button>
				</div>
			</div>
			<hr class="!border-t-4 !border-primary-700 rounded-2xl m-5" />
		</div>
	</form>
</div>

<style>
	.option {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

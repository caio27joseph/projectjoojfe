<script lang="ts">
	import type { TableSettings$result } from '$houdini';
	import { menuSelectedOption } from '$lib/components/TableLeftBar/tableLeftBar.stores';
	import { TableMenuEnum } from '$lib/components/TableLeftBar/types';
	import DangerZone from './DangerZone.svelte';
	import TableSettings from './TableSettings.svelte';

	export let data;
	const table: TableSettings$result['findTable'] = data.table as any;
</script>

<div class="container px-6 py-12">
	{#if $menuSelectedOption === TableMenuEnum.TableSettings}
		<TableSettings {table} />
	{:else if $menuSelectedOption === TableMenuEnum.NpcSettings}
		Configurações de NPC
		<!-- else if content here -->
	{:else if $menuSelectedOption === TableMenuEnum.LibrarySettings}
		Configurações da Biblioteca
		<!-- else if content here -->
	{:else if $menuSelectedOption === TableMenuEnum.DangerZone}
		<DangerZone />
	{:else}
		<!-- else content here -->
	{/if}
</div>

<style></style>

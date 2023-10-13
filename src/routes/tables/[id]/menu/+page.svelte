<script lang="ts">
	import type { TableInfo$result, TableSettings$result } from '$houdini';
	import { menuSelectedOption } from '$lib/components/TableLeftBar/tableLeftBar.stores';
	import { TableMenuEnum } from '$lib/components/TableLeftBar/types';
	import DangerZone from './DangerZone.svelte';
	import LibrarySettings from './LibrarySettings.svelte';
	import TableSettings from './TableSettings.svelte';

	export let data;

	const table: TableSettings$result['findTable'] = data.table as any;
	const libraries: TableInfo$result['tableLibraries'] = data.libraries ?? [];
</script>

<div class="container px-6 py-12">
	{#if $menuSelectedOption === TableMenuEnum.TableSettings}
		<TableSettings {table} />
	{:else if $menuSelectedOption === TableMenuEnum.NpcSettings}
		Configurações de NPC
		<!-- else if content here -->
	{:else if $menuSelectedOption === TableMenuEnum.LibrarySettings}
		<LibrarySettings {libraries} />
	{:else if $menuSelectedOption === TableMenuEnum.DangerZone}
		<DangerZone />
	{:else}
		<!-- else content here -->
	{/if}
</div>

<style></style>

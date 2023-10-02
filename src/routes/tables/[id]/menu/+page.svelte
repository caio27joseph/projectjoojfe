<script lang="ts">
	import { menuSelectedOption, TableMenuEnum } from '$lib/components/Table/LeftBar/table-settings';
	import TableSettings from './TableSettings.svelte';
</script>

<div class="container px-6 py-12">
	{#if $menuSelectedOption === TableMenuEnum.TableSettings}
		<TableSettings />
	{:else if $menuSelectedOption === TableMenuEnum.NpcSettings}
		Configurações de NPC
		<!-- else if content here -->
	{:else if $menuSelectedOption === TableMenuEnum.LibrarySettings}
		Configurações da Biblioteca
		<!-- else if content here -->
	{:else}
		<!-- else content here -->
	{/if}
</div>

<style></style>

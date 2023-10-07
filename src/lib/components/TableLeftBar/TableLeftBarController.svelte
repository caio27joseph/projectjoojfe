<script lang="ts">
	import { page } from '$app/stores';
	import type { TableInfo$result } from '$houdini';
	import TableLeftBar from './TableLeftBar.svelte';
	import TableMenuBar from './TableSettingsMenuBar.svelte';

	export let table: TableInfo$result['findTable'];
	export let libraries: TableInfo$result['tableLibraries'];
</script>

<div class="container h-screen w-[300px] overflow-auto bg-surface-600">
	{#if $page.route.id === '/tables/[id]'}
		<TableLeftBar {table} {libraries} />
	{:else if $page.route.id === '/tables/[id]/menu'}
		<TableMenuBar />
	{:else}
		...
	{/if}
</div>

<style>
</style>

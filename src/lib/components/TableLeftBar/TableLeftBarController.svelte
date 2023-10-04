<script lang="ts">
	import { page } from '$app/stores';
	import type { Table$result } from '$houdini';
	import TableLeftBar from './TableLeftBar.svelte';
	import TableMenuBar from './TableSettingsMenuBar.svelte';

	export let table: Table$result['findTable'];
</script>

<div class="container h-screen w-[300px] overflow-auto bg-surface-600">
	{#if $page.route.id === '/tables/[id]'}
		<TableLeftBar {table} />
	{:else if $page.route.id === '/tables/[id]/menu'}
		<TableMenuBar />
	{:else}
		...
	{/if}
</div>

<style>
</style>

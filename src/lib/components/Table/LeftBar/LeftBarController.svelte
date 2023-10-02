<script lang="ts">
	import { page } from '$app/stores';
	import TableLeftBar from './TableLeftBar.svelte';
	import TableMenuBar from './TableSettingsMenuBar.svelte';
</script>

<div class="container h-screen w-[300px] overflow-auto bg-surface-600">
	{#if $page.route.id === '/tables/[id]'}
		<TableLeftBar />
	{:else if $page.route.id === '/tables/[id]/menu'}
		<TableMenuBar />
	{:else}
		...
	{/if}
</div>

<style>
</style>

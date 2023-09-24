<script lang="ts">
	import TableShowCard from '$lib/components/TableShowCard.svelte';
	const explerTables = [
		{
			id: 1,
			title: 'Mesa 1'
		},
		{
			id: 2,
			title: 'Mesa 2'
		},
		{
			id: 3,
			title: 'Mesa 3'
		}
	];
</script>

<div class="container">
	{#each explerTables as table}
		<TableShowCard id={table.id.toString()} title={table.title} />
	{/each}

	<div>Feed Element</div>

	<div>Feed Element</div>
</div>

<style></style>

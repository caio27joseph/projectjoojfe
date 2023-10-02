<script lang="ts">
	import { selectedTable } from '~/lib/table/tableStore';
	import { fade } from 'svelte/transition';
	import Chat from './Chat.svelte';
	import Inspector from './Inspector.svelte';
	import Navbar from './Navbar.svelte';
	import type { Table } from '~/graphql/types';
	const pageTransitionDuration = 100;
	export let data: Table;
	const table = data;
</script>

<div
	class="container grid grid-rows-[auto,1fr] py-8 px-6 max-h-screen overflow-hidden w-full h-full"
	out:fade={{ duration: pageTransitionDuration }}
>
	{data.id}
	{JSON.stringify($selectedTable)}
	<Navbar tabs={['Artigo 2', 'Artigo 3']} />
	<div class="content-area grid grid-cols-[1fr,auto,300px] gap-4 items-start overflow-hidden">
		<Chat />
		<div
			class="divider w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent self-stretch"
		/>
		<Inspector />
	</div>
</div>

<style>
	.container {
		min-width: 100%;
	}
</style>

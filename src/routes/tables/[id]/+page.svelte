<script lang="ts">
	import Chat from './Chat.svelte';
	import Inspector from './Inspector.svelte';
	import Navbar from './Navbar.svelte';
</script>

<div
	class="container grid grid-rows-[auto,1fr] py-8 px-6 max-h-screen overflow-hidden w-full h-full"
>
	<Navbar tabs={['Artigo 1', 'Artigo 2', 'Artigo 3']} />
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

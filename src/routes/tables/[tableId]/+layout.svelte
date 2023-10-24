<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Controller from '$lib/components/TableLeftBar/TableLeftBarController.svelte';
	import Navbar from './Navbar.svelte';
	import Inspector from './Inspector.svelte';
	import { fade } from 'svelte/transition';
	import { tabs } from '$lib/table/NavBarController';

	export let data;
	$: libraries = data.libraries ?? [];
	$: table = data.table;

	data.libraryEvents.subscribe((result) => {
		const data = result.data;
		if (!data?.libraryEvent) return false;
		const { created, updated, removed } = data.libraryEvent;
		if (updated) {
			const index = libraries.findIndex((library) => library.id === updated.id);
			if (index === -1) return false;
			libraries[index] = updated;
			libraries = [...libraries];
		}
		if (created) {
			libraries = [...libraries, created];
		}
		if (removed) {
			libraries = libraries.filter((library) => library.id !== removed.id);
		}
	});

	const pageTransitionDuration = 100;
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		{#if table}
			<Controller {table} {libraries} />
		{/if}
	</svelte:fragment>

	<div
		class="container grid grid-rows-[auto,1fr] py-8 px-6 max-h-screen overflow-hidden min-w-full h-full"
		out:fade={{ duration: pageTransitionDuration }}
	>
		<Navbar tabs={$tabs} />
		<div class="content-area grid grid-cols-[1fr,auto,300px] gap-4 items-start overflow-hidden">
			<slot />

			<div
				class="divider w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent self-stretch"
			/>
			<Inspector />
		</div>
	</div>
</AppShell>

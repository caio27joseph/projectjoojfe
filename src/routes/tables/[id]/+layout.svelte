<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Controller from '$lib/components/TableLeftBar/TableLeftBarController.svelte';

	export let data;
	let libraries = data.libraries ?? [];

	const updateLibraries = (librarie: any) => {
		const index = libraries.findIndex((library) => library.id === librarie.id);
		if (index === -1) return false;
		libraries[index] = librarie;
		libraries = [...libraries];
	};
	data.update.subscribe((result) => {
		const data = result.data;
		if (!data?.directoryAdded) return false;
		const index = libraries.findIndex((library) => library.id === data.directoryAdded.id);
		if (index === -1) return false;
		// replace library for the received in data
		updateLibraries(data.directoryAdded);
	});
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		{#if data.table}
			<Controller table={data.table} {libraries} />
		{/if}
	</svelte:fragment>

	<slot />
</AppShell>

<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Controller from '$lib/components/TableLeftBar/TableLeftBarController.svelte';

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
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		{#if table}
			<Controller {table} {libraries} />
		{/if}
	</svelte:fragment>

	<slot />
</AppShell>

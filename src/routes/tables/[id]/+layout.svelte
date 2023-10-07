<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import Controller from '$lib/components/TableLeftBar/TableLeftBarController.svelte';

	export let data;
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		{#if data.table}
			<Controller table={data.table} libraries={data.libraries} />
		{/if}
	</svelte:fragment>

	<slot />
</AppShell>

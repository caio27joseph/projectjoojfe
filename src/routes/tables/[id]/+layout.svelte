<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import TableLeftBar from '../TableLeftBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<TableLeftBar />
	</svelte:fragment>

	<slot />
</AppShell>

<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import Controller from '$lib/components/Table/LeftBar/LeftBarController.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Controller />
	</svelte:fragment>

	<slot />
</AppShell>

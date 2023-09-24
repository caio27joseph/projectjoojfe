<script>
	import { AppShell } from '@skeletonlabs/skeleton';

	import HomeLeftBar from './HomeLeftBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<HomeLeftBar />
	</svelte:fragment>

	<slot />
</AppShell>

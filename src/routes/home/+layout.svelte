<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import HomeLeftBar from './HomeLeftBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<HomeLeftBar />
	</svelte:fragment>

	<div class="scrollable-content">
		<slot />
	</div>
</AppShell>

<style>
	.scrollable-content {
		max-height: 100vh;
		overflow-y: auto;
		width: 100%; /* Ensuring it takes full width */
	}
</style>

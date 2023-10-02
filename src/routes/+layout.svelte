<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import AppLeftBar from '$lib/components/AppLeftBar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data;
</script>

<Drawer />
<!-- App Shell -->
<AppShell class="app">
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<AppLeftBar tables={data.myTables} />
	</svelte:fragment>
	<slot />
</AppShell>

<style lang="postcss">
</style>

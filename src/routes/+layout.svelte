<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import AppLeftBar from './AppLeftBar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { redirect } from '@sveltejs/kit';
</script>

<Drawer />
<!-- App Shell -->
<AppShell class="app">
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<AppLeftBar />
	</svelte:fragment>
	<slot />
</AppShell>

<style lang="postcss">
</style>

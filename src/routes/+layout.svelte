<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, Modal, type ModalComponent } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	import AppLeftBar from './AppLeftBar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal />
<Drawer />
<!-- App Shell -->
<AppShell class="app">
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style lang="postcss">
</style>

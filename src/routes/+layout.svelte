<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import AppLeftBar from './AppLeftBar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<AppLeftBar />
	</svelte:fragment>

	<slot />
</AppShell>

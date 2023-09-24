<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<div class="container">
	<AppRail>
		<AppRailAnchor href="/home" selected={$page.url.pathname === '/home'}>Home</AppRailAnchor>
		<AppRailAnchor href="/tables/:id1" selected={$page.url.pathname === '/tables/:id1'}
			>Table1</AppRailAnchor
		>
	</AppRail>
</div>

<style></style>

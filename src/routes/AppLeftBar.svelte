<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<div class="container">
	<AppRail>
		<AppRailAnchor href="/home" selected={$page.url.pathname === '/home'}>Home</AppRailAnchor>
		<AppRailAnchor href="/tables/1" selected={$page.url.pathname === '/tables/1'}
			>Table1</AppRailAnchor
		>
		<AppRailAnchor href="/auth/sign-up" selected={$page.url.pathname === '/auth/sign-up'}
			>Sign Up</AppRailAnchor
		>
		<AppRailAnchor href="/auth/sign-in" selected={$page.url.pathname === '/auth/sign-in'}
			>Sign In</AppRailAnchor
		>
	</AppRail>
</div>

<style></style>

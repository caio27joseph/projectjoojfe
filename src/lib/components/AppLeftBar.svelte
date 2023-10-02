<script lang="ts">
	import { AppRail, AppRailAnchor, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import type { MyTables$result } from '$houdini';
	import TableButton from '$lib/components/Table/TableButton.svelte';

	export let tables: MyTables$result['myTables'];
</script>

<AppRail active="bg-none" hover="bg-none" gap="p-2 space-y-2">
	<slot name="lead">
		<AppRailAnchor href="/home" selected={$page.url.pathname === '/home'}>
			<Avatar src="/logo.svg" rounded="rounded-none" background="bg-none" />
		</AppRailAnchor>
	</slot>

	<hr class="!border-t-4 !border-primary-700 rounded-2xl m-2" />
	<div class="flex flex-col space-y-3 mb-2">
		{#each tables as table}
			<TableButton {table} />
		{/each}
	</div>
	<slot name="trail" />

	<svelte:fragment slot="trail">
		<AppRailAnchor href="/auth/sign-up" selected={$page.url.pathname === '/auth/sign-up'}
			>Sign Up</AppRailAnchor
		>
		<AppRailAnchor href="/auth/sign-in" selected={$page.url.pathname === '/auth/sign-in'}
			>Sign In</AppRailAnchor
		>
	</svelte:fragment>
</AppRail>

<style></style>

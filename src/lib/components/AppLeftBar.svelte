<script lang="ts">
	import { AppRail, AppRailAnchor, Avatar, type ModalSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import TableButton from '$lib/components/Table/TableButton.svelte';
	import type { MyTables$result } from '$houdini';

	export let tables: MyTables$result['myTables'];
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	const modal: ModalSettings = {
		type: 'component',
		component: 'createTableModal'
	};
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
		<button class="flex align-middle justify-center" on:click={() => modalStore.trigger(modal)}>
			<img src="/icons/create_table.svg" alt="" class="rounded-none h-13 w-13" />
		</button>
		<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
			<div><p>Demo Content</p></div>
			<div class="arrow bg-surface-100-800-token" />
		</div>
	</div>

	<slot name="trail" />

	<svelte:fragment slot="trail">
		<AppRailAnchor href="/auth/sign-up" selected={$page.url.pathname === '/auth/sign-up'}
			>Sign Up</AppRailAnchor
		>
		<AppRailAnchor href="/auth/sign-in" selected={$page.url.pathname === '/auth/sign-in'}
			>Sign In</AppRailAnchor
		>
		<form method="POST">
			<button formaction="/auth/account?/logout"> Logout </button>
		</form>
	</svelte:fragment>
</AppRail>

<style></style>

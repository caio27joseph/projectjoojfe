<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export let tabs: {
		id: string;
		icon: string;
		name: string;
	}[];
</script>

<div
	class="navbar flex justify-between rounded-2xl bg-surface-900 mb-3 variant-ringed-secondary py-1 px-2"
>
	<div class="tabs flex overflow-hidden">
		<button
			class="aba btn btn-base flex space-x-2 justify-center items-center py-5 px-3 hover:bg-surface-800 {!$page
				.params?.articleId
				? 'bg-surface-800'
				: ''}"
			on:click={() => {
				goto(`/tables/${$page.params.tableId}`);
			}}
		>
			<Icon icon="material-symbols:home-outline-rounded" width="20" height="20" />
		</button>
		{#each tabs as tab}
			<button
				class="aba btn btn-base flex space-x-2 justify-center items-center py-5 px-3 hover:bg-surface-800 {$page
					.params?.articleId === tab.id
					? 'bg-surface-800'
					: ''}"
				on:click={() => {
					goto(`/tables/${$page.params.tableId}/articles/${tab.id}`);
				}}
			>
				<Icon icon={tab.icon} width="20" height="20" />
				<h1 class="text-base">{tab.name}</h1>
			</button>
		{/each}
	</div>
	<button class="aba flex space-x-2 justify-center items-center p-6">
		<Icon icon="material-symbols:lists-rounded" width="20" height="20" />
	</button>
</div>

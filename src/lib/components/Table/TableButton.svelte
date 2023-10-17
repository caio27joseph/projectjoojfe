<script lang="ts">
	import { page } from '$app/stores';
	import { getInitials } from '$lib/utils';
	import { AppRailAnchor, Avatar } from '@skeletonlabs/skeleton';

	export let table: {
		readonly id: string;
		readonly title: string;
		readonly imageUrl?: string | null;
	};
	const path = table.id ? `/tables/${table.id}` : '/';
	$: selected = $page.url.pathname === path;
</script>

{#if table?.id && table.id !== 'null'}
	<!-- content here -->
	<AppRailAnchor href={path} {selected}>
		<Avatar
			src={table?.imageUrl ?? ''}
			initials={getInitials(table.title)}
			rounded="hover:rounded-2xl {selected ? 'rounded-2xl' : 'rounded-full'}"
		/>
	</AppRailAnchor>
{/if}

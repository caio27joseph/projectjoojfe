<script lang="ts">
	import { NavBarController } from '$lib/table/NavBarController';
	import { writable } from 'svelte/store';
	import BlockTextEditor from './BlockTextEditor.svelte';

	export let data;
	if (data.article) {
		NavBarController.openTab({
			id: data.article.id,
			name: data.article.name,
			icon: 'material-symbols:article-outline-rounded'
		});
	}
</script>

<BlockTextEditor />

<style></style>

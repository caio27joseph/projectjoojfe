<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let valueSingle: string = 'books';
</script>

<div class="container space-y-4 border border-primary-500/50">
	{valueSingle}
	<ListBox>
		<ListBoxItem bind:group={valueSingle} name="medium" value="channel1">Bate Papo 1</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="channel2">Bate Papo 2</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="channel3">Bate Papo 3</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="channel4">Bate Papo 4</ListBoxItem>
	</ListBox>
</div>

<style>
	.container {
		min-width: 240px;
	}
</style>

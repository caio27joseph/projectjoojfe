<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let valueSingle: string = 'books';
</script>

<div class="container space-y-4 border border-primary-500/50">
	{valueSingle}
	<ListBox>
		<ListBoxItem bind:group={valueSingle} name="medium" value="books">(Icone) Home</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="friend1">Amigo Feio 1</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="friend2">Amigo Feio 2</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="friend3">Amigo Feio 3</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="friend4">Amigo Feio 4</ListBoxItem>
		<ListBoxItem bind:group={valueSingle} name="medium" value="tv">TV</ListBoxItem>
	</ListBox>
</div>

<style>
	.container {
		min-width: 240px;
	}
</style>

<script lang="ts">
	import { marked } from 'marked';
	import postcss from 'postcss';

	export let description: string | undefined | null = ''; // This will be bound to the parent component's `body.description`

	let htmlOutput = '';

	$: htmlOutput = marked(description as string);
	let preview: HTMLElement;
	$: if (preview) {
		preview.innerHTML = marked(description as string);
	}
</script>

<div class="flex space-x-4">
	<textarea
		name="description"
		bind:value={description}
		rows="10"
		placeholder="Enter your markdown here..."
		class="input w-1/2 p-2 border rounded-md"
	/>
	<div
		class="markdown w-1/2 p-2 border rounded-md bg-surface-700 overflow-y-auto text-gray-200"
		bind:this={preview}
	/>
</div>

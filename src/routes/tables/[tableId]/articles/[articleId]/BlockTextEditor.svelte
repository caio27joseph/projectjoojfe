<script lang="ts">
	import { BlockEditor, type Block } from '$lib/editor/BlockEditor';
	import { onDestroy, onMount } from 'svelte';
	import { get, writable } from 'svelte/store';
	import TextBlock from './TextBlock.svelte';
	import { v4 } from 'uuid';

	let editor = new BlockEditor([
		{
			id: v4(),
			content: '',
			type: 'text'
		}
	]);
	let blockElements: { [key: string]: HTMLElement } = {};
	let blocks: Block[] = [];

	const unsubscribeBlocks = editor.blocks.subscribe((value) => {
		blocks = value;
	});

	const unsubscribeSelectedBlock = editor.selectedBlockId.subscribe((selectedId) => {
		if (selectedId) {
			focusBlockElement(selectedId);
		}
	});
	let cursorPosition = writable(0);

	function focusBlockElement(blockId: string) {
		const element = blockElements[blockId];
		if (element) {
			element.focus();
		}
	}

	onDestroy(() => {
		unsubscribeBlocks();
		unsubscribeSelectedBlock();
	});
</script>

<div class="container bg-surface-600 h-full rounded-lg p-6">
	{$cursorPosition}
	{#each blocks as block, index (block.id)}
		<div class="flex space-x-2 flex-grow flex-1 m-1">
			<span>{index}</span>
			<TextBlock
				bind:blockElement={blockElements[block.id]}
				bind:cursorPosition
				{block}
				on:focus={() => editor.selectBlock(block.id)}
				on:addNewBlock={() => editor.createBlockBelow(block.id)}
				on:moveFocus={({ detail }) => editor.moveFocus(detail?.direction)}
			/>
		</div>
	{/each}
</div>

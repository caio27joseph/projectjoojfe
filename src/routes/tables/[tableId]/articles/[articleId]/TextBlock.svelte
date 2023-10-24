<script lang="ts">
	import type { Block, BlockEditor } from '$lib/editor/BlockEditor';
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let block: Block;
	export let blockElement: HTMLElement | undefined = undefined;

	const dispatch = createEventDispatcher();
	export let cursorPosition: Writable<number>;
	let currentPos = 0;

	function handleInput(event: Event) {
		const target = event.target as HTMLDivElement;
		block.content = target.textContent || '';
		const range = window.getSelection()?.getRangeAt(0);
		if (!range) return;
		const preCaretRange = range.cloneRange();
		preCaretRange.selectNodeContents(target);
		preCaretRange?.setEnd(range.endContainer, range.endOffset);
		cursorPosition.set(preCaretRange.toString().length);
	}

	function setDivCursorPosition(div: HTMLDivElement, pos: number) {
		const range = document.createRange();
		const sel = window.getSelection();
		range.setStart(div.childNodes[0], pos);
		range.collapse(true);
		sel?.removeAllRanges();
		sel?.addRange(range);
		div.focus();
	}

	function onFocus(event: Event) {
		dispatch('focus', event);
		const target = event.target as HTMLDivElement;
		if ($cursorPosition >= block.content.length) return;
		setDivCursorPosition(target, $cursorPosition);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			dispatch('addNewBlock', { content: '' });
		}
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			dispatch('moveFocus', { direction: 'up' });
		} else if (event.key === 'ArrowDown') {
			event.preventDefault();
			dispatch('moveFocus', { direction: 'down' });
		} else if (event.key === 'ArrowLeft') {
			if ($cursorPosition === 0) {
				event.preventDefault();
				dispatch('moveFocus', { direction: 'up' });
			} else {
				cursorPosition.update((value) => value - 1);
			}
		} else if (event.key === 'ArrowRight') {
			if ($cursorPosition === block.content.length) {
				event.preventDefault();
				dispatch('moveFocus', { direction: 'down' });
			} else {
				cursorPosition.update((value) => value + 1);
			}
		}
	}
	onMount(() => {
		if (block.content === '' && blockElement) {
			blockElement.focus();
			const range = document.createRange();
			range.selectNodeContents(blockElement);
			range.collapse(false);
			const selection = window.getSelection();
			if (selection) {
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="grow bg-surface-700 block-container focus:outline-none"
	contenteditable="true"
	on:input={handleInput}
	on:keydown={handleKeydown}
	on:focus={onFocus}
	bind:this={blockElement}
>
	{block.content}
</div>

<style>
	/* Your existing styles */
</style>

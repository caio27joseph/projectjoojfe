import { get, writable, type Writable } from 'svelte/store';
import { v4 } from 'uuid';

export type BlockType = 'text' | 'title1' | 'image' | 'list' | 'code' | 'quote';

export interface Block {
	id: string;
	type: BlockType;
	content: string;
}

export class BlockEditor {
	constructor(
		initialBlocks: Block[] = [],
		public blocks: Writable<Block[]> = writable([]),
		public selectedBlockId: Writable<string | null> = writable()
	) {
		this.blocks.set(initialBlocks);
	}
	selectBlock(id: string | null) {
		console.log('selectBlock', id);
		this.selectedBlockId.set(id);
	}

	createBlockBelow(currentBlockId: string, type: BlockType = 'text') {
		console.log('createBlockBelow', currentBlockId, type);
		const currentBlocks = get(this.blocks);
		const currentIndex = currentBlocks.findIndex((block) => block.id === currentBlockId);
		if (currentIndex === -1) {
			throw new Error('Block not found');
		}
		const newBlock: Block = {
			id: v4(),
			type,
			content: ''
		};

		const updatedBlocks = [
			...currentBlocks.slice(0, currentIndex + 1),
			newBlock,
			...currentBlocks.slice(currentIndex + 1)
		];

		this.blocks.set(updatedBlocks);

		return newBlock.id;
	}
	moveFocus(direction: 'up' | 'down') {
		console.log('moving focus', direction);
		const currentBlocks = get(this.blocks);
		const currentId = get(this.selectedBlockId);

		if (!currentId) {
			return;
		}
		const currentIndex = currentBlocks.findIndex((block) => block.id === currentId);

		if (currentIndex === -1) {
			return;
		}
		const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

		if (newIndex >= 0 && newIndex < currentBlocks.length) {
			const newFocusedBlockId = currentBlocks[newIndex].id;
			this.selectedBlockId.set(newFocusedBlockId);
		}
	}
}

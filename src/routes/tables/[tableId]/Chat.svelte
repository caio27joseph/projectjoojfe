<script lang="ts">
	import MessagePool from './MessagePool.svelte';
	import { addMessage } from './messageStore'; // Adjust the path accordingly

	let inputMessage = '';

	function sendMessage() {
		if (!inputMessage) return;
		addMessage({
			id: 1,
			content: inputMessage,
			author: {
				id: 1,
				name: 'João da Silva',
				avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
			},
			createdAt: new Date()
		});
		inputMessage = '';
	}
</script>

<div class="chat flex flex-col px-4">
	<MessagePool messages={[]} />
	<form
		on:submit|preventDefault={sendMessage}
		class="message-tool grow-0 bg-surface-900 p-6 rounded-2xl flex space-x-4"
	>
		<button class="px-2 py-2">
			<img class="h-6 w-6" src="/icons/microphone.svg" alt="" />
		</button>
		<input
			bind:value={inputMessage}
			class="message-input variant-ringed-secondary grow rounded-md px-2 py-3 placeholder-white"
			type="text"
			placeholder="What you want to share today?"
		/>

		<button class="px-2 py-2">
			<img class="h-6 w-6" src="/icons/attachment.svg" alt="" />
		</button>
		<button type="submit" class="px-2 py-2">
			<img class="h-6 w-6" src="/icons/paper-plane.svg" alt="" />
		</button>
	</form>
</div>

<style>
	.chat {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%; /* This ensures the chat container takes up the full height of its parent */
		overflow: hidden; /* Prevents overflow */
	}

	.message-tool {
		flex-shrink: 0; /* This ensures the tool doesn't shrink if there's a lot of content in the message-pool */
	}
</style>

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { groupBy } from 'lodash';
	import { messagesStore } from './messageStore'; // Adjust the path accordingly
	import { afterUpdate } from 'svelte';
	import type { IMessage } from '$lib/types';

	export let messages: IMessage[];
	let messagePool: HTMLDivElement;

	const localeDatePtBr = (date: Date) => {
		// If Today return 'Hoje'
		// If Yesterday return 'Ontem'
		const today = new Date();
		const yesterday = new Date(today);
		if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) {
			return 'Hoje';
		}
		yesterday.setDate(today.getDate() - 1);
		if (date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth()) {
			return 'Ontem';
		}

		return date.toLocaleDateString('pt-BR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};
	let messagesByDate: {
		[key: string]: IMessage[];
	} = groupBy(messages, (msg) => localeDatePtBr(msg.createdAt));

	messagesStore.subscribe((value) => {
		messages = value;
		messagesByDate = groupBy(messages, (msg) => localeDatePtBr(msg.createdAt));
	});

	const getInitials = (name: string) => {
		try {
			const names = name.split(' ');
			let initials = names[0].substring(0, 1).toUpperCase();

			if (names.length > 1) {
				initials += names[names.length - 1].substring(0, 1).toUpperCase();
			}
			return initials;
		} catch (error) {
			return '?';
		}
	};
	const formatDateBsl = (date: Date) => {
		const now = new Date();
		const diff = now.getTime() - date.getTime();

		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		const hours = date.getHours();
		const minutes = date.getMinutes();

		if (diff < 21600000) {
			return `Today at ${hours}:${minutes}`;
		}

		return `${day}/${month}/${year} ${hours}:${minutes}`;
	};
</script>

<div class="message-pool py-4 px-2 h-full max-h-full" bind:this={messagePool}>
	{#each Object.entries(messagesByDate) as [date, dateMessages]}
		<div class="day-divider border-t-1 border-gray-500 border-solid my-4 px-2 flex justify-center">
			{date}
		</div>
		{#each dateMessages as msg}
			<div class="message flex p-4 space-x-6">
				<div class="message-avatar relative inline-block">
					<span class="badge-icon variant-filled-warning absolute -top-0 -right-0 z-10">2</span>
					<Avatar src={msg.author.avatarUrl} initials={getInitials(msg.author.name)} />
				</div>
				<div class="message-metadata">
					<div class="header flex space-x-4">
						<div class="message-author">{msg.author.name}</div>
						<span class="text-gray-300">{formatDateBsl(msg.createdAt)}</span>
					</div>
					<div class="message-text">{msg.content}</div>
				</div>
			</div>
		{/each}
	{/each}
</div>

<style lang="postcss">
	.message-pool {
		overflow-y: auto;
		flex-grow: 1;
		background: var(--color-primary-500); /* Adjust track color as needed */
	}
</style>

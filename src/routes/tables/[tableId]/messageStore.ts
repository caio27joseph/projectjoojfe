import { writable } from 'svelte/store';
import type { IMessage } from '$lib/types';

export const messagesStore = writable<IMessage[]>([]);

export function addMessage(newMessage: IMessage) {
	messagesStore.update((messages) => [...messages, newMessage]);
}

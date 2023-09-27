import { writable } from 'svelte/store';
import { createEventDispatcher } from 'svelte';

export const messagesStore = writable<IMessage[]>([]);

export function addMessage(newMessage: IMessage) {
	messagesStore.update((messages) => [...messages, newMessage]);
}

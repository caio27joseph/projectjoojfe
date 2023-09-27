import { writable } from 'svelte/store';

// This store will hold the currently selected directory/item name
export const selectedDirectory = writable<string | null>(null);

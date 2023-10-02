import { writable, type Writable } from 'svelte/store';

export const isAuthenticated = writable(false);

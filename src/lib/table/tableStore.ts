import type { Table, Table$result } from '$houdini';
import { writable, type Writable } from 'svelte/store';

export const selectedTable: Writable<Table$result['findTable'] | undefined> = writable();

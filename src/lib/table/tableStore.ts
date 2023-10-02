import { writable } from 'svelte/store';
import type { Table } from '~/graphql/types';

export const selectedTable = writable(null as any as Table);

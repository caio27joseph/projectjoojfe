import { writable } from 'svelte/store';
import { createEventDispatcher } from 'svelte';

export enum TableMenuEnum {
	TableSettings = 'TableSettings',
	NpcSettings = 'NpcSettings',
	LibrarySettings = 'LibrarySettings'
}

export const menuSelectedOption = writable<TableMenuEnum>(TableMenuEnum.TableSettings);

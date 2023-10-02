import { writable } from 'svelte/store';
import { TableMenuEnum } from './types';

export const menuSelectedOption = writable<TableMenuEnum>(TableMenuEnum.TableSettings);

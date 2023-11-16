import { goto } from '$app/navigation';
import { get, writable } from 'svelte/store';

type Tab = {
	id: string;
	name: string;
	icon: string;
};
export const tabs = writable<Tab[]>([]);
export const activeTab = writable<Tab>();

export class NavBarController {
	static openTab = (tab: Tab) => {
		// If exist in tabs, set as active
		// If not, add to tabs and set as active
		activeTab.set(tab);
		if (!get(tabs).some((t) => t.id === tab.id)) {
			tabs.update((tabs) => [...tabs, tab]);
		}
	};

	static removeTab = (tab: Tab) => {
		tabs.update((tabs) => tabs.filter((t) => t.id !== tab.id));
	};
}

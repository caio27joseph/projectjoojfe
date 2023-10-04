<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { menuSelectedOption } from './tableLeftBar.stores';
	import { TableMenuEnum } from './types';

	const Menu: { [k: string]: string } = {
		[TableMenuEnum.TableSettings]: 'Configurações da Mesa',
		[TableMenuEnum.NpcSettings]: 'Configurações de NPC',
		[TableMenuEnum.LibrarySettings]: 'Configurações da Biblioteca',
		[TableMenuEnum.DangerZone]: 'Zona de Perigo'
	};
	const MenuIcons: { [k: string]: string } = {
		[TableMenuEnum.TableSettings]: 'settings.svg',
		[TableMenuEnum.NpcSettings]: 'user-circle.svg',
		[TableMenuEnum.LibrarySettings]: 'compass.svg',
		[TableMenuEnum.DangerZone]: 'status.svg' // TODO: Change this icon
	};
</script>

<div class="px-2 pt-16">
	<div class="header px-4">
		<h1 class="text-3xl font-bold text-primary-500">Settings</h1>
		<span>
			<h2>Manage your account settings and set e-mail preferences.</h2>
		</span>
	</div>
	<div class="library-hub pt-6 pb-2 px-2">
		<ListBox>
			{#each Object.entries(Menu) as [k, v]}
				<ListBoxItem
					bind:group={$menuSelectedOption}
					name="medium"
					value={k}
					active="bg-surface-900"
					hover="hover:bg-surface-700"
				>
					<div class="menu-title flex flex-grow align-middle space-x-1">
						<img class="min-h-full w-4 object-contain" src="/icons/{MenuIcons[k]}" alt="" />
						<h1 class="font-thin whitespace-nowrap overflow-ellipsis">
							{v}
						</h1>
					</div>
				</ListBoxItem>
			{/each}
		</ListBox>
	</div>
</div>

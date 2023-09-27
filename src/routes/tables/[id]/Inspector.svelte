<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import InspectorStatus from './InspectorStatus.svelte';
	let tabSet: number = 2;
</script>

<div class="inspector flex h-full">
	<div>
		<TabGroup>
			<Tab flex="grow" bind:group={tabSet} name="controls-tab" value={0}>
				<div class="flex justify-around">
					<img src="/icons/controls.svg" alt="1" class="w-6 h-6" />
					{#if tabSet === 0}
						<span>Controls</span>
					{/if}
				</div>
			</Tab>
			<Tab flex="grow" bind:group={tabSet} name="status-tab" value={1}>
				<div class="flex justify-around">
					<img src="/icons/status.svg" alt="1" class="w-6 h-6" />
					{#if tabSet === 1}
						<span>Status</span>
					{/if}
				</div>
			</Tab>
			<Tab flex="grow" bind:group={tabSet} name="binds-tab" value={2}>
				<div class="flex justify-around">
					<img src="/icons/binds.svg" alt="1" class="w-6 h-6" />
					{#if tabSet === 2}
						<span>Binds</span>
					{/if}
				</div>
			</Tab>
		</TabGroup>
	</div>
	<div class="content grow">
		{#if tabSet === 0}
			(tab panel 1 contents)
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</div>
</div>

<style>
	.inspector {
		overflow-y: auto;
		flex-direction: column-reverse;
	}
</style>

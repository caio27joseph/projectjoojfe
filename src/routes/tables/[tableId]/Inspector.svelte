<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import InspectorStatus from './InspectorStatus.svelte';
	let tabSet: number = 1;
	const components = [undefined, InspectorStatus, undefined];
</script>

<div class="inspector flex h-full rounded-xl">
	<div class="bg-surface-900">
		<TabGroup active="text-primary-500">
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
	<div class="content grow overflow-auto">
		<InspectorStatus hidden={tabSet === 1} />
	</div>
</div>

<style>
	.inspector {
		overflow-y: auto;
		flex-direction: column-reverse;
	}
</style>

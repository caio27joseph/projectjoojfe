<script lang="ts">
	export let tabs: string[];
</script>

<div class="navbar rounded-2xl bg-surface-900 flex space-x-6 p-6 mb-3">
	{#each tabs as tab}
		<div class="aba flex space-x-2 justify-center">
			<img class="h-6 w-6" src="/icons/microphone.svg" alt="" />
			<h1>{tab}</h1>
		</div>
	{/each}
</div>

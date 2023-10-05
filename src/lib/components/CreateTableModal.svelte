<script lang="ts">
	import type { CreateTable$input } from '$houdini';
	import { getInitials } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';
	import TableCard from './TableCard.svelte';

	const tableInput: CreateTable$input['input'] = {};
</script>

<div class="card card-hover p-4 bg-surface-500">
	<header class="card-header">
		<h1 class="text-2xl font-bold text-secondary-400">Criar Mesa</h1>
		<span>Crie uma nova mesa para jogar com seus amigos</span>
		<div class="preview p-4 flex flex-col space-y-3 justify-center items-center">
			<Avatar
				src={tableInput.imageUrl ?? ''}
				initials={getInitials(tableInput.title ?? '') ?? 'JooJ'}
			/>
			<div class="w-80 h-48">
				<TableCard title={tableInput.title ?? ''} img={tableInput.imageUrl ?? ''} />
			</div>
		</div>
	</header>
	<section class="p-4">
		<form class="m-8" method="POST" action="/tables?/createTable">
			<div class="flex-grow flex flex-col space-y-6">
				<label class="block">
					<input
						name="title"
						bind:value={tableInput.title}
						class="form-input input block w-full"
						type="text"
						placeholder="Table Title"
					/>
				</label>
				<label class="block">
					<input
						name="imageUrl"
						bind:value={tableInput.imageUrl}
						class="form-input input block w-full"
						type="url"
						placeholder="Table image Url"
					/>
				</label>
			</div>
			<div class="actions p-6">
				<button type="submit" class="w-full rounded-lg shadow-md variant-ghost-success p-2">
					Create
				</button>
			</div>
		</form>
	</section>
</div>

<style>
</style>

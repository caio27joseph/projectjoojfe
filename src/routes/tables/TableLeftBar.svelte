<script lang="ts">
	import Library from '$lib/components/Library/Library.svelte';
	import { page } from '$app/stores';

	let valueSingle: string = 'books';
	const table = {
		title: "Jojo's Bizarre Adventure",
		img: 'https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg'
	};

	const libraries = [
		{
			name: 'Cenário',
			icon: 'compass'
		},
		{
			name: 'Sistema',
			icon: 'settings'
		},
		{
			name: 'Personagens',
			icon: 'user-circle'
		}
	];
	const library: IDirectory = {
		name: 'root',
		directories: [
			{
				name: 'Attachments'
			},
			{
				name: 'Templates'
			},
			{
				name: 'Artigos',
				directories: [
					{
						name: 'Libraries 1 '
					},
					{
						name: 'Libraries 2 ',

						articles: [
							{
								name: 'Artigo 2.1'
							},
							{
								name: 'Artigo 2.2'
							}
						]
					},
					{
						name: 'Libraries 3 '
					},
					{
						name: 'Libraries 4 '
					},
					{
						name: 'Libraries 5 ',

						directories: [
							{
								name: 'Libraries 5.1 ',
								articles: [
									{
										name: 'Artigo 5.1'
									},
									{
										name: 'Artigo 5.2'
									}
								]
							},
							{
								name: 'Libraries 5.2 '
							}
						]
					}
				],

				articles: [
					{
						name: 'Artigo 1'
					},
					{
						name: 'Artigo 2'
					}
				]
			}
		]
	};
	console.log($page.route.id);
</script>

<div class="container h-screen bg-surface-600">
	<div class="table-info flex font-bold py-0" style="background-image: url({table.img});">
		<h1 class="px-6 bg-gradient-to-t from-black bg-opacity-50">
			Do dolore sunt pariatur elit ex ullamco cillum ut et esse quis labore excepteur amet.
		</h1>
	</div>
	<div class="library-hub pt-6 pb-2 px-2">
		<h1 class="text-primary-500 px-4">Bibliotecas</h1>
		<div class="hub-options">
			{#each libraries as library}
				<div class="navigation-item flex px-4 py-2 space-x-1">
					<img class="h-6 w-4" src="/icons/{library.icon}.svg" alt="" />
					<h1>{library.name}</h1>
				</div>
			{/each}
		</div>
	</div>

	<Library root={library} />
</div>

<style>
	.table-info {
		height: 135px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		position: relative;
		align-items: end;
	}

	.container {
		width: 240px;
	}
	.library-hub {
		border-bottom: 0.1px solid #ffffff40;
	}
</style>

<script lang="ts">
	import TableCard from '$lib/components/TableCard.svelte';
	const bestTable = {
		id: 1,
		title: 'Mesa 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec nunc tincidunt ultrices. Nulla facilisi. Nulla facilisi.',
		img: 'https://th.bing.com/th/id/R.1913958f798a3d3fbb7ecc121f3f0ac0?rik=xySiN%2f04BFQr2w&pid=ImgRaw&r=0'
	};

	const recommendedTables = [
		{
			id: 1,
			title: 'Mesa 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec nunc tincidunt ultrices. Nulla facilisi. Nulla facilisi.',
			img: 'https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg'
		},
		{
			id: 2,
			title: 'Mesa 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec nunc tincidunt ultrices. Nulla facilisi. Nulla facilisi.',
			img: 'https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg'
		},
		{
			id: 3,
			title: 'Mesa 3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec nunc tincidunt ultrices. Nulla facilisi. Nulla facilisi.',
			img: 'https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg'
		},
		{
			id: 4,
			title: 'Mesa 4',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec nunc tincidunt ultrices. Nulla facilisi. Nulla facilisi.',
			img: 'https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg'
		},
		{
			id: 5,
			title: 'Mesa 5',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit nec nunc tincidunt ultrices. Nulla facilisi. Nulla facilisi.',
			img: 'https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg'
		}
	];
</script>

<div
	class="container h-[80vh] bg-center bg-cover w-full max-w-full"
	style="background-image: url({bestTable.img});"
>
	<div class="table-info p-8 bg-black bg-opacity-50 text-white absolute top-0 left-0">
		<h2 class="text-xl font-bold mb-4">{bestTable.title}</h2>
		<p>{bestTable.description}</p>
	</div>
	. Aqui mostrando o que ninguem mostra . Aqui mostrando o que ninguem mostra
</div>
<div class="feed flex flex-col space-y-8">
	{#each [1, 2, 3] as _}
		<!-- This loop is just a placeholder to generate 3 rows. -->
		<div class="w-full max-w-full h-48">
			<h2 class="text-2xl font-bold mb-4">Recomendados</h2>
			<ul class="flex flex-row space-x-4 overflow-x-scroll pb-5 h-full">
				{#each recommendedTables as table}
					<li class="w-64 shrink-0">
						<TableCard id={table.id.toString()} title={table.title} img={table.img} />
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<div>Feed Element</div>

<style>
	.container {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		-webkit-mask-image: linear-gradient(to bottom, black, black 50%, transparent 90%);
		mask-image: linear-gradient(to bottom, black, black 50%, transparent 90%);
	}
	.feed {
		transform: translateY(-150px);
	}
</style>

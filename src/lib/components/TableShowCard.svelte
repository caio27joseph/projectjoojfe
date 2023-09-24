<script lang="ts">
	export let id: string;
	export let title: string;
	let currentVariant = 'bg-initial';
</script>

<a class="flex flex-col lg:flex-row card card-hover overflow-hidden p-5" href="/tables/{id}">
	<header class="">
		<img
			src="https://sucodemanga.com.br/wp-content/uploads/2021/04/jojo-bizarre-adventures-thumb.jpg"
			class="bg-black/50 w-full aspect-[1/1]"
			alt="Post"
		/>
	</header>
	<div class="p-4 space-y-4">
		<h6 class="h6" data-toc-ignore>{title}</h6>
		<h3 class="h3" data-toc-ignore>{id}</h3>
		<article>
			<p>
				<!-- cspell:disable -->
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet
				eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
				cum expedita architecto itaque quae rem.
				<!-- cspell:enable -->
			</p>
		</article>
	</div>
</a>

<style>
	img {
		object-fit: cover;
	}
</style>

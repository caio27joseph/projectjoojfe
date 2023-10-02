<script lang="ts">
	export let id: string;
	export let title: string;
	export let img: string;
	let currentVariant = 'bg-initial';
	export let disabled = false;
</script>

<div class="card-wrapper">
	<a
		class="flex flex-col lg:flex-row card card-hover overflow-hidden relative"
		href={disabled ? '#' : '/tables/{id}'}
	>
		<div class="img-container w-[182px]">
			<img src={img} class="w-full h-full object-cover" alt="Post" />
		</div>
		<div class="flex-grow p-4 space-y-4">
			<h6 class="h6" data-toc-ignore>{title}</h6>
			<h3 class="h3" data-toc-ignore>Icon1, Icon2</h3>
		</div>
	</a>
</div>

<style>
	.card-wrapper {
		position: relative;
		width: 364px; /* Setting explicit width based on your feedback */
		height: 139px; /* Setting explicit height based on your feedback */
	}

	.card {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	img {
		object-fit: cover;
	}
</style>

<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { writable } from 'svelte/store';

	const body: any = {};

	let error = writable(false); // To show errors
</script>

<div class="min-h-screen flex items-center justify-center flex-col lg:flex-row">
	<div class="flex flex-col items-center space-y-4 m-5 lg:m-10">
		<img src="/logo.svg" alt="Logo" class="w-20 md:w-40" />
		<img src="/RPJooJ.svg" alt="RPJooJ" class="h-10 md:h-20" />
		<h1 class="text-on-primary font-heading text-2xl font-semibold hidden lg:block">Boas Vindas</h1>
	</div>
	<form
		method="POST"
		action="?/login"
		class="w-full md:m-20 md:w-3/4 lg:w-1/2 xl:max-w-xl p-8 variant-soft-primary rounded-lg shadow-lg space-y-8"
		use:enhance={(e) => {
			return async ({ result }) => {
				if (result.type === 'failure') {
					error.set(true);
				}
				await applyAction(result);
			};
		}}
	>
		<h2 class="text-on-primary font-heading text-4xl font-bold mb-8">Sign In</h2>
		{#if $error}
			<div class="text-red-500">Invalid Credentials!</div>
		{/if}
		<div class="flex-grow flex flex-col space-y-6">
			<label class="block">
				<input
					name="email"
					class="form-input input block w-full"
					type="email"
					placeholder="Email"
					bind:value={body.email}
				/>
			</label>
			<label class="block">
				<input
					id="password"
					name="password"
					class="form-input input block w-full"
					type="password"
					placeholder="Password"
					bind:value={body.password}
				/>
			</label>

			<a href="#" class="text-tertiary-300 font-base">Forgot your password?</a>

			<div class="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-2">
				<button
					class="text-on-primary font-base w-full sm:w-1/2 px-12 py-2 bg-primary-500 rounded-lg shadow-md"
				>
					Sign In
				</button>
				<button
					class="text-on-secondary font-base w-full sm:w-1/2 px-12 py-2 bg-tertiary-700 rounded-lg shadow-md"
					on:click|preventDefault={() => goto('/auth/sign-up')}
				>
					Create Account
				</button>
			</div>

			<div class="flex flex-row justify-center items-center space-x-4 sm:hidden">
				<!-- <button class="w-12 h-12 bg-primary-700 rounded-full">
					<img src="/path-to-google-icon.svg" alt="Google" class="w-6 h-6" />
				</button>
				<button class="w-12 h-12 bg-primary-700 rounded-full">
					<img src="/path-to-microsoft-icon.svg" alt="Microsoft" class="w-6 h-6" />
				</button>
				<button class="w-12 h-12 bg-primary-700 rounded-full">
					<img src="/path-to-github-icon.svg" alt="Github" class="w-6 h-6" />
				</button> -->
			</div>
		</div>
	</form>
</div>

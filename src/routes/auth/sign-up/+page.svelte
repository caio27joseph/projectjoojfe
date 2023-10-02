<script lang="ts">
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';
	let errorMessage = ''; // For error feedback
	let successMessage = ''; // For successful registration feedback

	async function handleRegister() {
		const host = 'http://localhost:3050';
		try {
			const response = await fetch(`${host}/auth/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});
			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.message || 'Registration failed');
			}

			successMessage = 'Registered successfully! You can now login.';
		} catch (error: any) {
			errorMessage = error.message;
		}
	}
</script>

<div class="min-h-screen flex items-center justify-center flex-col lg:flex-row">
	<!-- Logo and Welcome Section (Left side) -->
	<div class="flex flex-col items-center space-y-4 m-5 lg:m-10">
		<img src="/logo.svg" alt="Logo" class="w-20 md:w-40" />
		<img src="/RPJooJ.svg" alt="RPJooJ" class="h-10 md:h-20" />
		<h1 class="text-on-primary font-heading text-2xl font-semibold hidden lg:block">Bem-vindo!</h1>
	</div>

	<!-- Registration Form (Right side) -->
	<form
		on:submit|preventDefault={handleRegister}
		class="w-full md:m-20 md:w-3/4 lg:w-1/2 xl:max-w-xl p-8 variant-soft-primary rounded-lg shadow-lg space-y-8"
	>
		<h2 class="text-on-primary font-heading text-4xl font-bold mb-8">Criar Conta</h2>
		{#if errorMessage}
			<div class="text-red-500">{errorMessage}</div>
		{/if}
		{#if successMessage}
			<div class="text-green-500">{successMessage}</div>
		{/if}
		<div class="flex-grow flex flex-col space-y-6">
			<label class="block">
				<input
					bind:value={email}
					class="form-input input block w-full"
					type="email"
					placeholder="Email"
				/>
			</label>
			<label class="block">
				<input
					bind:value={password}
					class="form-input input block w-full"
					type="password"
					placeholder="Senha"
				/>
			</label>
			<button
				class="text-on-primary font-base w-full px-12 py-2 bg-primary-500 rounded-lg shadow-md"
			>
				Registrar
			</button>
		</div>
	</form>
</div>

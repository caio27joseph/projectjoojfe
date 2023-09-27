<script lang="ts">
	import { groupBy } from 'lodash';
	import { userFactory, type IUser } from '../../../factories/user';

	export let hidden: boolean;
	// Generate 10 users
	const users: IUser[] = Array.from({ length: 10 }, userFactory);
	const usersByRole = groupBy(users, (u) => u.role);
</script>

<ul class="container h-full {hidden ? 'active' : 'hidden'}">
	{#each Object.entries(usersByRole) as [role, users]}
		-- Role {role} --
		{#each users as user}
			<li class="flex flex-grow items-center space-x-2 py-2 px-4 w-full">
				<img class="h-24 w-16" src={user.avatar} alt="None" />
				<div class="flex-grow flex flex-col whitespace-nowrap overflow-hidden h-24">
					<h1 class="text-lg truncate">
						<span
							class="bg-gradient-to-br from-primary-500 to-secondary-400 text font-bold bg-clip-text text-transparent box-decoration-clone"
							>{user.name}</span
						>
					</h1>
					<span class="quote truncate text-sm">{user.quote}</span>
				</div>
			</li>
		{/each}
	{/each}
</ul>

<style>
	img {
		object-fit: cover;
		border-radius: 0.9rem;
	}
</style>

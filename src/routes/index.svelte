<script lang="ts">
	import { fade } from 'svelte/transition';
	// stores
	import { pokemon, fetchPokemon } from '../stores/pokestore';
	// components
	import PokemanCard from '../components/PokemanCard.svelte';

	let searchTerm: string;
	let filteredPokemon: { name: string; id: number; image: string }[];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>SvelteKit TS Pokedex</title>
</svelte:head>
<div transition:fade>
	<h1 class="text-4xl text-center my-8 uppercase">SvelteKit TypeScript Pokedex</h1>

	<!-- Filter by name -->
	<input
		type="text"
		placeholder="Search Pokemon"
		bind:value={searchTerm}
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	/>

	<!-- TODO pokemon fetch amount controller -->

	<button
		class="px-3 py-1 bg-orange-600 text-white font-bold uppercase m-4 rounded-md "
		on:click={() => {
			fetchPokemon(200);
		}}>Fetch 200</button
	>

	<div class="pokelist">
		<ul class="py-4 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{#each filteredPokemon as pokeman}
				<li>
					<PokemanCard {pokeman} />
				</li>
			{/each}
		</ul>
	</div>
</div>

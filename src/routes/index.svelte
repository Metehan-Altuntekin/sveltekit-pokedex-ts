<script lang="ts">
import { fade } from 'svelte/transition'
import IconifyIcon from '@iconify/svelte'
// types
import type { Pokeman } from '../types'
// stores
import { pokemon, loading, fetchPokemon } from '../stores/pokestore'
// components
import PokemonList from '../components/PokemonList.svelte'
import PokemanCard from '../components/PokemanCard.svelte'

// Filter by name
let searchTerm: string
let filteredPokemon: Pokeman[]

$: {
	if (searchTerm) {
		filteredPokemon = $pokemon.filter((pokeman) =>
			pokeman.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
		)
	} else {
		filteredPokemon = [...$pokemon]
	}
}

// Pokemon quantity
let pokemonQty: number = $pokemon.length || 10

$: {
	console.log({ pokemonQty })
	if (pokemonQty > $pokemon.length) fetchPokemon(pokemonQty)
	if (pokemonQty < $pokemon.length) $pokemon = $pokemon.slice(0, pokemonQty)
}
</script>

<svelte:head>
	<title>SvelteKit TS Pokedex</title>
</svelte:head>
<div transition:fade>
	<h1 class="text-4xl text-center my-8 uppercase">SvelteKit TypeScript Pokedex</h1>

	<div class="controls bg-slate-200 p-5 flex flex-col md:flex-row  justify-between gap-5">
		<!-- Filter by name -->
		<input
			type="text"
			placeholder="Search Pokemon"
			bind:value={searchTerm}
			class="w-full rounded-lg text-md p-4 border-2 border-gray-200 "
		/>

		<!-- Pokemon quantity  -->
		<div class="flex  bg-blue-500 rounded-md justify-between relative overflow-hidden">
			<button
				on:click={() => pokemonQty--}
				disabled={$loading}
				class="p-1 text-3xl  text-white hover:bg-gray-100/20 "
				><IconifyIcon class=" text-white" icon="eva:minus-square-fill" /></button
			>
			<input
				type="number"
				bind:value={pokemonQty}
				size={String(pokemonQty).length}
				disabled={$loading}
				class="p-4 appearance-none bg-transparent text-white align-middle text-center font-semibold text-xl max-w-10 min-w-0"
			/>
			<button
				on:click={() => pokemonQty++}
				disabled={$loading}
				class="p-1 text-3xl  text-white hover:bg-gray-100/20 "
				><IconifyIcon class=" text-white" icon="eva:plus-square-fill" /></button
			>
			{#if $loading}
				<div
					role="status"
					transition:fade
					class="absolute w-full h-full bg-blue-500 flex justify-center items-center"
				>
					<svg
						aria-hidden="true"
						class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-100"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span class="sr-only">Loading...</span>
				</div>
			{/if}
		</div>
	</div>

	<PokemonList pokemon={filteredPokemon} />
</div>

<style>
/* For disabling HTML arrows on number input*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type='number'] {
	-moz-appearance: textfield;
}
</style>

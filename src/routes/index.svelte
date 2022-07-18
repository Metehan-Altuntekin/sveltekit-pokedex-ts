<script lang="ts">
	import { fade } from 'svelte/transition'
	import Iconify from '@iconify/iconify'
	// types
	import type { Pokeman } from '../types'
	// stores
	import { pokemon, fetchPokemon } from '../stores/pokestore'
	// components
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
		<div class="flex  bg-blue-500 rounded-md justify-between">
			<button on:click={() => pokemonQty--} class="p-1 text-3xl  text-white hover:bg-gray-100/20 "
				><span class="iconify text-white" data-icon="eva:minus-square-fill" /></button
			>
			<input
				type="number"
				bind:value={pokemonQty}
				size={String(pokemonQty).length}
				class="p-4 appearance-none bg-transparent text-white align-middle text-center font-semibold text-xl max-w-10 min-w-0"
			/>
			<button on:click={() => pokemonQty++} class="p-1 text-3xl  text-white hover:bg-gray-100/20 "
				><span class="iconify text-white" data-icon="eva:plus-square-fill" /></button
			>
		</div>
	</div>

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

<script context="module" lang="ts">
	export async function load({ params }: { params: { id: number } }) {
		const id = params.id
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`
		const res = await fetch(url)
		const pokeman = await res.json()
		return { props: { pokeman } }
	}
</script>

<script lang="ts">
	// types
	import type { PokemanDetails } from '../../types'

	export let pokeman: PokemanDetails
	const type: string = pokeman.types[0].type.name
</script>

<svelte:head>
	<title>{pokeman.name.toUpperCase()} - Pokedex</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image w-[50vw]" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>

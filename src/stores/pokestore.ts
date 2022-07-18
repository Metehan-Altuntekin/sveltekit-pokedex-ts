import { writable, get } from 'svelte/store'
// types
import type { Writable } from 'svelte/store'
import type { Pokeman } from '../types'

export const pokemon: Writable<Pokeman[]> = writable([])

export async function fetchPokemon(num = 10) {
	const url = get(pokemon).length
		? `https://pokeapi.co/api/v2/pokemon?limit=${num - get(pokemon).length}&offset=${
				get(pokemon).length
		  }`
		: `https://pokeapi.co/api/v2/pokemon?limit=${num}`

	console.log(url)

	const res = await fetch(url)
	const data = await res.json()
	const loadedPokemon: Pokeman[] = await data.results.map(
		(data: { name: string; url: string }, index: number) => {
			return {
				name: data.name,
				id: get(pokemon).length + index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					get(pokemon).length + index + 1
				}.png`
			}
		}
	)

	pokemon.set([...get(pokemon), ...loadedPokemon])
}
fetchPokemon()

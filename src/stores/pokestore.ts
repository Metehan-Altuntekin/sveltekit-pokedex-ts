import { writable } from 'svelte/store';
// types
import type { Writable } from 'svelte/store';
import type { Pokeman } from '../types';

export const pokemon: Writable<Pokeman[]> = writable([]);

export async function fetchPokemon(num = 10) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;

	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon: Pokeman[] = data.results.map(
		(data: { name: string; url: string }, index: number) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		}
	);

	pokemon.set(loadedPokemon);
}
fetchPokemon();

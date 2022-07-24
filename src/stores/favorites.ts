import { writable, get } from 'svelte/store'
// types
import type { Writable } from 'svelte/store'

export const favorites: Writable<number[]> = writable([])

export function add(id: number): void {
	favorites.set([...get(favorites), id])
}

export function remove(id: number): void {
	console.dir(get(favorites))
	favorites.set(get(favorites).filter((item) => item !== id))
}

export function switchFavorite(id: number): void {
	if (get(favorites).includes(id)) {
		remove(id)
		console.log(`favorites includes ${id}`)
	} else {
		add(id)
		console.log(`favorites doesn't include ${id}`)
	}
}

export function clear(): void {
	favorites.set([])
}

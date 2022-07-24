<script lang="ts">
import IconifyIcon from '@iconify/svelte'
// stores
import { favorites, switchFavorite } from '../stores/favorites'
// types
import type { Pokeman } from '../types'

export let pokeman: Pokeman

const { name, image, id } = pokeman

$: isFavorite = $favorites.includes(id)
</script>

<div class="pokeman-container relative">
	<a
		href="/pokemon/{id}"
		sveltekit:noscroll
		class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center relative"
	>
		<img src={image} alt="Image of {name}" class="w-[30vw] " />
		<h2 class="uppercase text-xl">{id}. {name}</h2>
	</a>
	<button
		on:click={() => switchFavorite(id)}
		class="fav-button {!isFavorite && 'hidden'} rounded-md overflow-hidden absolute right-5 top-5"
		title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
	>
		<IconifyIcon
			class="iconify bg-gray-200 p-1 text-4xl md:text-5xl {isFavorite
				? 'text-fuchsia-600'
				: 'text-fuchsia-300'}"
			icon="ic:round-favorite"
		/>
	</button>
</div>

<style>
@media (hover: none) {
	.fav-button {
		display: block;
	}
}
.pokeman-container:hover .fav-button {
	display: block;
}
</style>

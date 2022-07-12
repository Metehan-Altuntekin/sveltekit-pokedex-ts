<script lang="ts">
	// stores
	import { pokemon } from '../stores/pokestore';
	// components
	import PokemanCard from '../components/PokemanCard.svelte';
</script>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit TypeScript Pokedex</h1>

<div class="pokelist">
	<ul class="py-4 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#each $pokemon as pokeman}
			<li>
				<PokemanCard {pokeman} />
			</li>
		{/each}
	</ul>
</div>

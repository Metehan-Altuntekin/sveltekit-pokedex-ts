<script lang="typescript">
	import { pokemon } from '../stores/pokestore';
	console.log($pokemon);
</script>

<h1>SvelteKit TypeScript Pokedex</h1>

{#each $pokemon as pokeman}
	<h2>{pokeman.name}</h2>
{/each}

<style>
	h1 {
		color: crimson;
	}
</style>

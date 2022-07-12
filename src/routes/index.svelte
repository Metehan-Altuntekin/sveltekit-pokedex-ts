<script lang="typescript">
	import { pokemon } from '../stores/pokestore';
</script>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit TypeScript Pokedex</h1>

{#each $pokemon as pokeman}
	<h2>{pokeman.name}</h2>
{/each}

<script lang="ts">
// types
import type { Pokeman } from '../types'
// components
import PokemanCard from './PokemanCard.svelte'

export let pokemon: Pokeman[]
</script>

<div class="pokelist">
	<ul class="py-4 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{#each pokemon as pokeman}
			<li>
				<PokemanCard {pokeman} />
			</li>
		{/each}
	</ul>
</div>

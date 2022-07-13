<script lang="ts">
	// types
	import type { Pokeman } from '../types';

	export let pokeman: Pokeman;
</script>

<a
	href="/pokemon/{pokeman.id}"
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center "
>
	<img src={pokeman.image} alt="Image of {pokeman.name}" class="w-[30vw] " />
	<h2 class="uppercase text-xl">{pokeman.id}. {pokeman.name}</h2>
</a>

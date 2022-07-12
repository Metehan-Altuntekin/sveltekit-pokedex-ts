<script context="module" lang="ts">
	export async function load({ params }: { params: object }) {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
		// return { props: { pokeman: { name: 'dickie' } } };
	}
</script>

<script lang="ts">
	export let pokeman: { name: string; weight: number; height: number; types: any; sprites: any };
	const type = pokeman.types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>
	<img class="card-image w-[50vw]" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>

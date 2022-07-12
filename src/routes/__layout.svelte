<script lang="ts">
	import Navbar from '../layouts/navbar.svelte';
</script>

<div class="p8 max-w-2xl mx-auto">
	<header class=" py-3 ">
		<Navbar />
	</header>
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

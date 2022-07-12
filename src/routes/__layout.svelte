<script lang="ts">
	import Navbar from '../layouts/navbar.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
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

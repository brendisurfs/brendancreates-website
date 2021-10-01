<script lang="ts">
	import Footer from "./Footer.svelte";
	import MobileNav from "./MobileNav.svelte";
	import Navbar from "./Navbar.svelte";

	let windowSize = window.innerWidth;
	window.addEventListener("resize", () => {
		windowSize = window.innerWidth;
	});
</script>

<div class="window-container">
	{#if windowSize <= 640}
		<MobileNav />
	{/if}
	{#if windowSize > 640}
		<Navbar />
	{/if}
	<slot />
	<Footer />
</div>

<style>
	.window-container {
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	@media (max-width: 640px) {
	}
</style>

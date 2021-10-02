<!-- plan for using the work cards: 
	loop through obj add props for each one.
-->
<script lang="ts">
	import WorkCard from "../components/WorkCard.svelte";

	const workcardInfo = [
		{
			cardName: "Code",
			about: "My code work",
			cardLink: "/",
		},
		{ cardName: "Visual", about: "My visual work", cardLink: "/visual" },
	];
</script>

<div class="container">
	{#each workcardInfo as card}
		<WorkCard {...card} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		flex-direction: row;
		padding: 1rem;
		height: 100vh;
		width: 100%;
	}
	@media (max-width: 760px) {
		.container {
			flex-direction: column;
		}
	}
</style>

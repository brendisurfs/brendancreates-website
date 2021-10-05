<!-- plan for using the work cards: 
	loop through obj add props for each one.
-->
<script lang="ts">
    import WorkCard from '../components/WorkCard.svelte';
    import WorkCardNolink from '../components/WorkCard_NOLINK.svelte';

    type CardInfo = {
        cardName: string;
        about: string;
        cardLink: string;
        useLink: boolean;
    };

    const workcardInfo: CardInfo[] = [
        {
            cardName: 'Code',
            about: 'See code work',
            cardLink: 'https://github.com/brendisurfs',
            useLink: false,
        },
        {
            cardName: 'Visual',
            about: 'See Visual Work',
            cardLink: '/visual',
            useLink: true,
        },
    ];
</script>

<div class="container">
    <!-- <WorkCard cardName="Code" about="See Code Work" cardLink="/" /> -->
    {#each workcardInfo as card}
        {#if card.useLink == true}
            <WorkCard {...card} />
        {:else if card.useLink == false}
            <WorkCardNolink {...card} />
        {/if}
    {/each}
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 1rem;
        height: 85vh;
    }
    @media (max-width: 760px) {
        .container {
            flex-direction: column;
        }
    }
</style>

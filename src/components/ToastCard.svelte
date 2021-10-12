<script>
    import {fly} from "svelte/transition"

</script>
<div in:fly={{y: 200, duration: 100}}>
    <p>
        submit successful
    </p>
</div>
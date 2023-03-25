<script>
import Column from "./Column.svelte";
</script>

<div class="Scroll">
    <Column><slot></slot></Column>
</div>

<style>
    .Scroll{
        overflow-y: scroll hidden;

    }
</style>
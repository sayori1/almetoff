<script>
import Row from "./Row.svelte";

</script>
<div class="Scroll">
    <Row><slot></slot></Row>
</div>

<style>
    .Scroll{
        overflow-x: scroll;
    }
</style>
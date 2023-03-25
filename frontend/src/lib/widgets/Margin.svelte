<script type="ts">
    export let left: string = "0";
    export let right: string = "0";
    export let top: string = "0";
    export let bottom: string = "0";
</script>

<div style="margin-left: {left}; margin-right: {right}; margin-top: {top}; margin-bottom: {bottom}">
    <slot></slot>
</div>
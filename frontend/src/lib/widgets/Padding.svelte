<script type="ts">
    export let left: string = "0";
    export let right: string = "0";
    export let top: string = "0";
    export let bottom: string = "0";
</script>

<div style="padding-left: {left}; padding-right: {right}; padding-top: {top}; padding-bottom: {bottom}">
    <slot></slot>
</div>
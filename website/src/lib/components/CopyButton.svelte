<script lang="ts">
    import Copy from "lucide-svelte/icons/copy";
    import Check from "lucide-svelte/icons/check";

    let { text } = $props();
    let copied = $state(false);

    function onCopy() {
        navigator.clipboard.writeText(text);
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 1500);
    }
</script>

<button class="cursor-pointer" onclick={onCopy}>
    {#if copied}
        <Check class="w-4 h-4" />
    {:else}
        <Copy class="w-4 h-4" />
    {/if}
</button>
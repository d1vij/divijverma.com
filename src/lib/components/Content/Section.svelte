<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
</script>

<div class={["bg-background w-full h-20 p-2", "border border-border rounded"]}>
    {@render children()}
</div>

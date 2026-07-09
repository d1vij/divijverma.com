<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };
    const { children }: Props = $props();
</script>

<h2 class="block font-serif text-4xl font-bold md:text-6xl">
    {@render children()}
</h2>

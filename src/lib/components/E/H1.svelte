<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };
    const { children }: Props = $props();
</script>

<h1 class="block font-serif text-7xl font-bold md:text-8xl">
    {@render children()}
</h1>

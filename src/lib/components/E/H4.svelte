<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };
    const { children }: Props = $props();
</script>

<h4 class="block font-serif text-xl font-bold md:text-2xl">
    {@render children()}
</h4>

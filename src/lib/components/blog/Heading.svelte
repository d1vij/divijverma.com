<script lang="ts" module>
    import { getRegistry } from "$lib/state/HeadingRegistry.svelte";
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        depth: 1 | 2 | 3 | 4 | 5 | 6;
        children?: Snippet;
        title: string;
    };
    const { depth, title, children }: Props = $props();

    const registry = getRegistry();
    // svelte-ignore state_referenced_locally
    const id = registry.register(depth, title);
</script>

{#snippet headerText()}
    {#if children != undefined}
        {@render children()}
    {:else}
        {title}
    {/if}
{/snippet}

{#if depth == 1}
    <h1 {id}>
        {@render headerText()}
    </h1>
{:else if depth == 2}
    <h2 {id}>
        {@render headerText()}
    </h2>
{:else if depth == 3}
    <h3 {id}>
        {@render headerText()}
    </h3>
{:else if depth == 4}
    <h4 {id}>
        {@render headerText()}
    </h4>
{:else if depth == 5}
    <h5 {id}>
        {@render headerText()}
    </h5>
{:else}
    <h6 {id}>
        {@render headerText()}
    </h6>
{/if}

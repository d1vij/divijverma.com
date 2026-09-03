<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import TextContent from "$lib/components/TextContent.svelte";

    type Props = {
        children: Snippet;
    };
    const { children }: Props = $props();
</script>

<TextContent {children} />

<style lang="postcss">
    @reference "tailwindcss";
    .heading-menu-item {
        padding-left: calc(--spacing(4) * var(--spacing-unit));
        &[data-depth="1"] {
            --spacing-unit: 1;
        }
        &[data-depth="2"] {
            --spacing-unit: 2;
        }
        &[data-depth="3"] {
            --spacing-unit: 3;
        }
        &[data-depth="4"] {
            --spacing-unit: 4;
        }
        &[data-depth="5"] {
            --spacing-unit: 5;
        }
        &[data-depth="6"] {
            --spacing-unit: 6;
        }
    }
</style>

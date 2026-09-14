<script lang="ts">
    import { type Snippet } from "svelte";
    import TextContent from "$lib/components/TextContent.svelte";

    type Props = {
        children: Snippet;
    };
    const { children }: Props = $props();
</script>

<TextContent {children} />

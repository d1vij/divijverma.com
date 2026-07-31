<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };
    const { children }: Props = $props();
</script>

<section
    class={[
        "prose text-text-primary prose-headings:font-serif prose-headings:text-text-secondary prose-p:leading-normal  prose-li:marker:text-text-muted",
        "prose-a:text-text-muted prose-a:decoration-transparent prose-a:transition-all prose-a:after:content-[''] prose-a:active:decoration-text-muted prose-a:hover:decoration-text-muted",
    ]}
>
    {@render children()}
</section>

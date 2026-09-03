<script lang="ts">
    import { type Snippet } from "svelte";

    type Props = {
        children: Snippet;
        ref?: HTMLDivElement;
    };
    let { children, ref = $bindable() }: Props = $props();
</script>

<div
    bind:this={ref}
    class={[
        "prose text-text-primary prose-p:leading-normal prose-li:marker:text-text-muted",
        "prose-a:text-emerald-600 prose-a:decoration-wavy",
        "prose-headings:mt-10 prose-headings:mb-4 prose-headings:font-serif prose-headings:font-bold prose-headings:text-neutral-300",
        "prose-headings:first:mt-12",
        "prose-h1:text-6xl md:prose-h1:text-7xl",
        "prose-h2:text-4xl md:prose-h2:text-5xl",
        "prose-h3:text-3xl md:prose-h3:text-4xl",
        "prose-h4:text-2xl md:prose-h4:text-3xl",
    ]}
>
    {@render children()}
</div>

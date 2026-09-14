<script lang="ts">
    import { random } from "radashi";
    import type { Snippet } from "svelte";

    type HighlightVarient = "yellow" | "red" | "green";
    type Props = {
        children: Snippet;
        varient?: HighlightVarient;
    };

    const { children, varient = "yellow" }: Props = $props();

    const rotation = random(-2, 2);
</script>

<span class="relative">
    <div
        class="highlight"
        data-varient={varient}
        style={`transform: rotate(${rotation}deg);`}
    ></div>
    {@render children()}
</span>

<style lang="postcss">
    @reference "tailwindcss";

    .highlight {
        @apply absolute inset-0 -z-1 -m-0.5;
        transform: rotate(var(--data-rotation));
        &[data-varient="yellow"] {
            background-color: #f2e6a860;
        }
        &[data-varient="green"] {
            background-color: #c3dcbe;
        }
    }
</style>

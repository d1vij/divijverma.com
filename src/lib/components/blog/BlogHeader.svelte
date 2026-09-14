<script lang="ts" module>
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
    });
</script>

<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        blog_title: Snippet;
        created_at: Date;
    } & Partial<{
        modified_at: Date;
        modified_count: number;
    }>;

    const props: Props = $props();
    const created_at = $derived(dateFormatter.format(props.created_at));
</script>

{#snippet divider()}
    <span class="text-neutral-700"> ⎜ </span>
{/snippet}

<header class="">
    <h1 class="font-serif text-5xl font-bold md:text-7xl">
        {@render props.blog_title()}
    </h1>
    <div class="mt-2 flex gap-2">
        <div class="contents font-serif text-sm font-medium tracking-wide text-text-secondary">
            <span class="inline-flex items-center gap-1 text-amber-500">
                <span class=""> written </span>
                {created_at}</span
            >
            {#if props.modified_at == null}
                {@render divider()}
                <span class="inline-flex items-center gap-1 text-cyan-500">
                    <span> amended ×{props.modified_count || 1} </span>
                    {created_at}</span
                >
            {/if}
        </div>
    </div>
</header>

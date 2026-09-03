<script lang="ts">
    import { resolve } from "$app/paths";
    import TextContent from "$lib/components/TextContent.svelte";
</script>

<h1 class="mb-4 font-serif text-5xl font-medium">Some Stuff</h1>

<div>
    <div class="grid grid-cols-[auto_1fr] grid-rows-subgrid items-baseline gap-2">
        <span class="row-span-1 text-sm font-medium text-text-muted">23 Nov, 2024</span>
        <div class="row-span-2">
            <h3 class="row-span-1 font-serif text-lg font-semibold tracking-wide">
                <a href={resolve("/blogs/creating-cbse-wrapped")}> Creating Cbse Wrapped </a>
            </h3>
            <div>adasda</div>
        </div>
    </div>
</div>

<script lang="ts">
    import { resolve } from "$app/paths";
    import { ArrowUpRight } from "@lucide/svelte";
</script>

<div class="mb-11 space-y-2">
    <h1 class="font-serif text-5xl font-medium">Blogs</h1>
    <!-- <p>writing about the things im doing</p> -->
</div>

<div>
    <div class="grid grid-cols-[auto_1fr] grid-rows-subgrid items-baseline gap-2">
        <span class="row-span-1 text-sm font-medium text-text-muted">15 Apr, 2024</span>
        <div class="row-span-2 space-y-1">
            <h3
                class="row-span-1 flex items-center gap-1 font-serif text-lg font-semibold tracking-wide underline decoration-text-muted decoration-wavy decoration-1"
            >
                <a href={resolve("/blogs/creating-cbse-wrapped")}> Creating Cbse Wrapped </a>
                <ArrowUpRight class="size-4 stroke-text-muted" />
            </h3>
            <div class="">
                How I built a full-stack data pipeline to scrape, clean, and visualize CBSE Class
                XII results for my school.
            </div>
        </div>
    </div>
</div>

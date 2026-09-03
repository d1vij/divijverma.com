<script lang="ts">
    import BlogHeadingMenu from "$lib/components/blog/BlogHeadingMenu.svelte";
    const { children } = $props();
    import { initRegistry } from "$lib/state/HeadingRegistry.svelte";
    initRegistry();
</script>

<div class="relative mb-20 flex">
    <div class="">
        {@render children()}
    </div>
    <BlogHeadingMenu />
</div>

<script lang="ts">
    import { getRegistry } from "$lib/state/HeadingRegistry.svelte";
    const registry = getRegistry();
    const headings = $derived(registry.headings);
</script>

<ol class="sticky top-20 h-fit">
    {#each headings as heading (heading.title)}
        <li data-depth={heading.depth - 1} class="heading-menu-item">
            <a href={`#${heading.id}`}>
                {@html heading.title}
            </a>
        </li>
    {/each}
</ol>

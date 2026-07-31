<script lang="ts">
    import { page } from "$app/state";
    import { resolve } from "$app/paths";
    import type { Pathname } from "$app/types";
    import type { Snippet } from "svelte";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    type Props = {
        href: Pathname;
        children: Snippet;
    };

    const { href, children }: Props = $props();

    const isActive = $derived(page.url.pathname === href);
</script>

<a
    href={resolve(href)}
    class={[isActive && "active", "nav-item"]}
    draggable="false"
    {@attach vibrateOnClick(50)}
>
    <span class="nav-item-state"></span>
    {@render children()}
</a>

<style lang="postcss">
    @reference "tailwindcss";
    .nav-item {
        @apply relative z-10 box-border inline-block font-serif;
        @apply cursor-pointer transition-all duration-100 ease-in-out;
        @apply rounded-xl px-1 py-1 text-lg md:text-xl;

        &.active .nav-item-state,
        &:hover .nav-item-state {
            @apply border-(--color-border-strong);
            @apply border-solid;
            width: calc(100% - --spacing(4));
        }

        &:not(.active):hover .nav-item-state {
            @apply border-dotted;
        }
    }

    .nav-item-state {
        @apply absolute h-1 w-0 bg-transparent;
        @apply bottom-1;
        @apply transition-all;
        @apply border-b-3 border-(--color-border);
        left: --spacing(2);
    }
</style>

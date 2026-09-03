<script lang="ts">
    import { page } from "$app/state";
    import { resolve } from "$app/paths";
    import { Home } from "@lucide/svelte";

    import NavbarItem from "$lib/components/NavbarItem.svelte";
</script>

<nav
    class={[
        "pointer-none fixed bottom-2 left-1/2 z-20 -translate-x-1/2  px-3 py-2 select-none md:bottom-8",
        "flex flex-nowrap items-center justify-start gap-1 overflow-clip",
        "rounded-2xl border-2 border-zinc-800/90 bg-zinc-900/60 text-text-secondary backdrop-blur-lg",
    ]}
>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/projects">Projects</NavbarItem>
    <NavbarItem href="/about">About</NavbarItem>
    <NavbarItem href="/blogs">Blogs</NavbarItem>
</nav>

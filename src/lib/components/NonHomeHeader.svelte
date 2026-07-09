<script>
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { Asterisk } from "@lucide/svelte";
    import { resolve } from "$app/paths";
</script>

<header>
    <nav class="flex w-full items-center justify-between gap-1 font-serif">
        <Asterisk class="block size-5 stroke-text-secondary" />
        <a href={resolve("/")} class="block font-medium" {@attach vibrateOnClick(50)}>Divij Verma</a
        >
    </nav>
</header>

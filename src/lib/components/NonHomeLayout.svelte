<script lang="ts">
    import { resolve } from "$app/paths";
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { Asterisk } from "@lucide/svelte";
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
</script>

<section class="flex h-dvh flex-col gap-0 p-2 pt-0 pb-2 md:px-8">
    <header
        class="rounded-bxl flex items-center justify-between border-2 border-b-0 border-border bg-background px-6 py-1 font-serif md:p-16 md:py-10"
    >
        <nav class="">
            <span class="flex items-center gap-1">
                <!-- <Asterisk class="block size-5 stroke-text-secondary" /> -->
                <a href={resolve("/")} class="text-lg font-medium" {@attach vibrateOnClick(50)}
                    >divijverma.com</a
                >
            </span>
        </nav>
    </header>
    <div class="size-full">
        <div
            class="size-full rounded-xl rounded-t-none border-2 border-t-0 border-border bg-background p-6 pt-2 md:p-16 md:py-2"
        >
            {@render children()}
        </div>
    </div>
</section>

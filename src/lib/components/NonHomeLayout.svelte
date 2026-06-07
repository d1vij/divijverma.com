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

<section class="flex h-dvh w-dvw flex-col gap-0 p-2 pt-0 md:px-8">
    <div
        class={[
            "size-full rounded-xl rounded-t-none border-2 border-t-0 border-border bg-background",
            "p-6 pt-2 md:p-16",
            "space-y-8",
        ]}
    >
        <header>
            <nav class="flex w-full items-center justify-between gap-1 font-serif">
                <Asterisk class="block size-5 stroke-text-secondary" />
                <a href={resolve("/")} class="block font-medium" {@attach vibrateOnClick(50)}
                    >Divij Verma</a
                >
            </nav>
        </header>

        {@render children()}
    </div>
</section>

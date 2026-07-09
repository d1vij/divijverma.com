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

<section class="flex h-dvh w-dvw flex-col gap-0 p-2 pt-0 text-text-primary md:px-8">
    <div
        class={[
            "size-full rounded-xl rounded-t-none border-2 border-t-0 border-border bg-background",
            "p-6 pt-2 md:p-16",
            "space-y-8",
        ]}
    >
        {@render children()}
    </div>
</section>

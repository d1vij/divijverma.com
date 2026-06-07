<script lang="ts">
    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { ArrowUpRight, Asterisk } from "@lucide/svelte";
    import { resolve } from "$app/paths";
    import E from "$lib/components/E";
</script>

<!-- Hero -->

{#snippet Header()}
    {#snippet Link(title: string, href: string)}
        <a
            {href}
            class={[
                "group",
                "text-muted over:text-text-secondary px-[1ch]",
                "transition-all",
                "flex items-center gap-1",
            ]}
            {@attach vibrateOnClick(50)}
        >
            <span class="relative">
                {title}
                <div
                    class="absolute bottom-0 h-0.5 w-0 bg-border-strong transition-all group-hover:w-full"
                ></div>
            </span>
        </a>
    {/snippet}

    <header class="flex items-center justify-between font-serif">
        <Asterisk class="block size-5 stroke-text-secondary" />
        <nav class="flex items-center justify-end py-1">
            {@render Link("Blogs", resolve("/blogs"))}
            {@render Link("Contact", resolve("/contact"))}
        </nav>
    </header>
{/snippet}

<section class={["text-text-primary-dark flex h-dvh w-dvw flex-col bg-theme", "p-2 pt-0 md:px-8"]}>
    <div
        class={[
            "h-full rounded-xl rounded-t-none bg-background",
            "p-6 pt-2 md:p-16",
            "flex flex-col justify-between",

            "border-2 border-border",
        ]}
    >
        <div class="space-y-6">
            {@render Header()}
            <div class=" md:space-y-3">
                <E.H1>Divij Verma</E.H1>
                <h2 class="text-xs font-medium text-text-muted md:text-base">
                    Engineering Undergrad @ VIT Vellore
                </h2>
            </div>
        </div>
        <div class="space-y-4 lg:max-w-200">
            <!-- <Asterisk /> -->
            <p>
                <!-- &LT;TBD&GT; -->
                I'm an engineering undergraduate in Computer Science with interests in web development,
                systems programming, and Linux. I enjoy building projects, and writing about the things
                I make.
            </p>
            <p>
                My work spans a variety of stacks, primarily involving TypeScript, Python, and web
                frameworks such as SvelteKit and React. I am currently focused on learning C and
                systems programming.
            </p>
            <p>
                Say hi at <span class="tracking-w font-medium"
                    ><a target="_blank" href="mailto:namaste@divijverma.com"
                        >namaste@divijverma.com</a
                    ></span
                >
            </p>
        </div>
    </div>
</section>

<section class="h-dvh w-dvw bg-theme"></section>

<section class="h-dvh w-dvw rounded-xl bg-background"></section>

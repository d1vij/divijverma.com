<script lang="ts">
    /* eslint-disable svelte/no-navigation-without-resolve */

    import { vibrateOnClick } from "@d1vij/shit-i-always-use/svelte";
    import { ArrowUpRight, Asterisk } from "@lucide/svelte";
    import { resolve } from "$app/paths";
    import E from "$lib/components/E";
    import Layout from "$lib/components/Layout.svelte";
    import CareerItem from "$lib/components/CareerItem.svelte";
    import Stack from "$lib/components/Content/Stack.svelte";
</script>

{#snippet Header()}
    {#snippet Link(title: string, href: string)}
        <a
            {href}
            class={[
                "group",
                "text-muted over:text-text-secondary px-[1ch]",
                "transition-all",
                "flex items-center gap-1 select-none",
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
            {@render Link("Contact", resolve("/contact"))}
            {@render Link("Blogs", resolve("/blogs"))}
            {@render Link("/dev/random", resolve("/random"))}
        </nav>
    </header>
{/snippet}

{#snippet Bold(text: string)}
    <b class="font-bold">
        {text}
    </b>
{/snippet}

<!-- Hero -->
<Layout>
    <div class="flex size-full flex-col justify-between">
        <div class="space-y-6">
            {@render Header()}
            <div class=" md:space-y-3">
                <E.H1>Divij Verma</E.H1>
                <h2 class="text-xs font-medium text-text-muted md:text-base">
                    Engineering Undergrad @ {@render Bold("TBD")}
                </h2>
            </div>
        </div>
        <div class="space-y-4 lg:max-w-200">
            <!-- <Asterisk /> -->
            <p>
                <!-- &LT;TBD&GT; -->
                I'm an engineering undergraduate in
                {@render Bold("TBD")}
                with interests in web development, systems programming, and Linux. I enjoy building projects,
                and writing about the things I make.
            </p>
            <p>
                My work spans a variety of stacks, primarily involving TypeScript, Python, and web
                frameworks such as SvelteKit and React. I am currently focused on learning C and
                systems programming.
            </p>
            <p>
                Say hi at <a
                    target="_blank"
                    href="mailto:namaste@divijverma.com"
                    class="inline-flex items-center gap-1 font-medium group"
                >
                    <span> namaste@divijverma.com </span>
                    <ArrowUpRight
                        class="size-4 stroke-text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                </a>
            </p>
        </div>
    </div>
</Layout>

<!-- Projects -->
<section
    class={["min-h-dvh w-dvw bg-theme text-text-on-dark", "p-6 pt-2 md:p-16", "flex flex-col"]}
>
    <E.H1>Projects</E.H1>

    <div class={["size-full flex justify-around items-center grow flex-col", ""]}>
        <div class="bg-red-300 size-40"></div>

        <a href="">All Projects</a>
    </div>
</section>

<!-- Work -->
<section class={["min-h-dvh w-dvw rounded-xl bg-background", "space-y-16 p-6 pt-2 md:p-16"]}>
    <E.H1>Career Experiences</E.H1>

    <ul class="space-y-16 border border-border py-8 rounded bg-surface px-4 lg:px-40">
        {#snippet Link(title: string, href: string)}
            <a {href} class="block" target="_blank">
                <span class="font-serif font-medium">{title} -</span>

                <span
                    class="text-text-secondary underline decoration-dotted decoration-text-muted hover:text-text-primary hover:decoration-solid transition-all"
                >
                    {href}
                </span>
            </a>
        {/snippet}
        <CareerItem
            company_name="DAV Public School"
            career_type="Intern"
            start_date={new Date(2025, 9, 1)}
            end_date={new Date(2025, 10, 1)}
            location="Pune"
            position="Developer, Designer"
        >
            {#snippet description()}
                Handled the design and development of the website for VakalatNama, a prototype
                AI-powered legal platform built for the DAV SharkTank Competition 2025. Actively
                collaborated with students and teachers to incorporate their ideas and feedback into
                the product, ensuring the website effectively represented the project’s vision. The
                project achieved 3rd place among 20+ teams from various schools.
            {/snippet}

            {#snippet body()}
                <Stack items={["TypeScript", "Web Technologies"]} />
                <div>
                    {@render Link("Github", "https://github.com/d1vij/vakalatnama-website")}
                    {@render Link("Demo", "https://d1vij.github.io/vakalatnama-website/")}
                </div>
            {/snippet}
        </CareerItem>

        <CareerItem
            company_name="DAV Public School"
            career_type="Intern"
            location="Pune"
            start_date={new Date(2025, 0, 1)}
            end_date={new Date(2025, 6, 1)}
            position="Developer, Election Head"
        >
            {#snippet description()}
                Designed and built a full-stack application for intra-school council elections,
                enabling secure and transparent voting for 1,000+ voters. Leveraged Python tools
                such as Pandas, Matplotlib, and Seaborn for comprehensive post-election data
                analysis and visualization.
            {/snippet}

            {#snippet body()}
                <Stack
                    items={[
                        "FastAPI",
                        "Node.js",
                        "TypeScript",
                        "MongoDB",
                        "Python",
                        "Web Technologies",
                    ]}
                />

                {@render Link("Github", "https://github.com/d1vij/electionsoftware")}
            {/snippet}
        </CareerItem>
    </ul>
</section>

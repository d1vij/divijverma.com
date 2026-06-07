<script lang="ts">
    import NonHomeLayout from "$lib/components/NonHomeLayout.svelte";
    import E from "$lib/components/E";
    import { ArrowUpRight } from "@lucide/svelte";
</script>

<NonHomeLayout>

    <E.H1>Contact</E.H1>

    <ul class="grid grid-cols-1 gap-4">
        {#snippet Contact(title: string, content: string, href:string)}
            <li>
                <a class="block" href={href} target="_blank">
                    <div class="flex justify-between">
                        <h2 class="font-serif tracking-wide text-sm font-medium text-text-secondary">{title}</h2>
                        <ArrowUpRight class="stroke-text-secondary size-4"/>
                    </div>
                    <p class="select-all">{content}</p>
                </a>
            </li>
        {/snippet}

        {@render Contact("Mail", "divij@divijverma.com", "mailto:divij@divijverma.com")}
        {@render Contact("Mail (alt)", "verma.divij@gmail.com", "mailto:verma.divij@gmail.com")}
        {@render Contact("Github", "github.com/d1vij", "https://github.com/d1vij")}
        {@render Contact("Linkedin", "linkedin.com/in/d1vij", "https://www.linkedin.com/in/d1vij/")}
    </ul>
</NonHomeLayout>

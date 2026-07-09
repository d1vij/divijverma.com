<script lang="ts">
    type Props = {
        items: string[];
    };

    const { items }: Props = $props();
</script>

<ul
    class="border border-border-strong flex gap-1 divide-border-strong divide-solid divide-x w-fit rounded bg-surface-raised text-text-secondary"
>
    {#each items as item (item)}
        <li class="text-xs p-1">{item}</li>
    {/each}
</ul>

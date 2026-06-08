<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />

    <link
        rel="preload"
        href="/fonts/UntitledSans/ttf/UntitledSans-Regular.ttf"
        as="font"
        type="font/ttf"
        crossorigin=""
    />
    <link
        rel="preload"
        href="/fonts/UntitledSerif/ttf/UntitledSerif-Regular.ttf"
        as="font"
        type="font/ttf"
        crossorigin=""
    />
</svelte:head>
{@render children()}

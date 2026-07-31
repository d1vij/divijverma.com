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
        href="/fonts/UntitledSans/ttf/UntitledSans-Medium.ttf"
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
    <link
        rel="preload"
        href="/fonts/UntitledSerif/ttf/UntitledSerif-Medium.ttf"
        as="font"
        type="font/ttf"
        crossorigin=""
    />
</svelte:head>

<div class="relative mx-auto min-h-dvh w-dvw p-4 md:max-w-200 md:py-8">
    {@render children()}
</div>

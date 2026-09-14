<script lang="ts">
    const { children } = $props();
</script>

<svelte:head>
    <title>Blogs by Divij Verma</title>
</svelte:head>

<div class="mb-20">
    {@render children()}
</div>

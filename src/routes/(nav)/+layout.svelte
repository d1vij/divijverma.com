<script lang="ts">
    import SiteNavbar from "$lib/components/SiteNavbar.svelte";
    const { children } = $props();
</script>

<div class="mb-20">
    {@render children()}
</div>
<SiteNavbar />

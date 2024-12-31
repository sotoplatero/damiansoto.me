<script>
    export let title;
</script>

<article class="max-w-4xl mx-auto py-16 px-4">
    <div class="prose prose-lg max-w-none">
        <slot />
    </div>
</article>

<style>
    :global(.prose) {
        @apply prose-headings:font-semibold prose-headings:tracking-tighter;
        @apply prose-p:text-gray-600;
        @apply prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline;
        @apply prose-li:text-gray-600;
    }
</style>

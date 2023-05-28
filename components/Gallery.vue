<template>
    <main>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="image in links" :key="image.original">
                <img
                    class="h-auto max-w-full rounded-lg"
                    :src="image.original"
                    :alt="image.alt"
                    loading="lazy"
                    :width="image.width"
                    :height="image.height"
                />
            </div>
        </div>
    </main>
</template>
<script lang="ts">
interface ImgSource {
    original: string;
    alt: string;
    width: number;
    height: number;
}
export default {
    name: "Gallery",
    props: {
        links: {
            required: true,
            type: Array<ImgSource>,
            default: () => [],
        },
    },
}
</script>

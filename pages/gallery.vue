<template>
    <div class="bg-white m-10">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            Gallery <span class="text-green-500">{{ links.length }}</span>
        </h1>
        <Gallery :links="links" :is-hidden="!isSafe" :size="size" />
    </div>
</template>
<script lang="ts">
import Gallery from "~/components/Gallery.vue"
import unsafeImagesData from "~/assets/gallery-unsafe.json"
import safeImagesData from "~/assets/gallery-safe.json"

export default {
    name: "GalleryPage",
    components: {
        Gallery,
    },
    computed: {
        level() {
            return this.$route.query.level as string
        },
        size() {
            return this.$route.query.size as ImgSource
        },
        count() {
            return parseInt(this.$route.query.count as string)
        },
        isSafe() {
            return this.level === "safe"
        },
        links(): Array<ImgApiSource> {
            const data = this.level === "safe" ? safeImagesData : unsafeImagesData as unknown as Array<ImgApiSource>
            return data.slice(0, this.count) as Array<ImgApiSource>
        },
    },
}
</script>

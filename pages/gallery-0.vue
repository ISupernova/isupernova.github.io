<template>
    <div class="bg-white m-10">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            Gallery <span class="text-green-500">{{ links.length }}</span>
        </h1>
        <Gallery :links="links" :is-hidden="true" />
    </div>
</template>
<script>
import Gallery from "~/components/Gallery.vue"
import imagesData from "~/assets/gallery-0.json"

export default {
    name: "GalleryPage0",
    components: {
        Gallery,
    },
    data() {
        return {
            links: imagesData
        }
    },
}
</script>

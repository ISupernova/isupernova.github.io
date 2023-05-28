<template>
    <div class="bg-white m-10">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            Gallery <span class="text-green-500">{{ links.length }}</span>
        </h1>
        <Gallery :links="links" />
    </div>
</template>
<script>
import Gallery from "~/components/Gallery.vue"
import imagesData from "~/assets/gallery-100.json"

export default {
    name: "GalleryPage100",
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

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
export default {
    name: "GalleryPage100",
    components: {
        Gallery
    },
    data() {
        return {
            links: [
                "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
                "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg",
                "https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg",
                "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg",
                "https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg",
                "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg",
                "https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg",
                "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg",
                "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg",
                "https://images.pexels.com/photos/2909077/pexels-photo-2909077.jpeg"]
        }
    }
}
</script>
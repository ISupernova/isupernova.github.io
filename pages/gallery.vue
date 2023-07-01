<template>
    <div class="bg-white m-10">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            Gallery <span class="text-green-500">{{ links.length }}</span>
        </h1>
        <Gallery :links="links" :is-hidden="!isSafe" />
    </div>
</template>
<script lang="ts">
import Gallery from "~/components/Gallery.vue"
import unsafeImagesData from "~/assets/gallery-unsafe.json"
import safeImagesData from "~/assets/gallery-safe.json"

interface ImgSource {
    original: string
    alt: string
    width: number
    height: number
}

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
            return this.$route.query.size as string
        },
        count() {
            return parseInt(this.$route.query.count as string)
        },
        isSafe() {
            return this.level === "safe"
        },
        links(): Array<ImgSource> {
            const data = this.level === "safe" ? safeImagesData : unsafeImagesData
            const suffixOptions: { [key: string]: string }  = {
                small: "auto=compress&cs=tinysrgb&h=130",
                medium: "auto=compress&cs=tinysrgb&h=350",
                large: "auto=compress&cs=tinysrgb&h=650&w=940",
                large2x: "auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                original: "",
            }
            const suffix = suffixOptions[this.size] || ""

            const limitedData = data.slice(0, this.count)
            return limitedData.map((image: ImgSource) => {
                return {
                    ...image,
                    original: `${image.original}?${suffix}`,
                }
            })
        },
    },
}
</script>

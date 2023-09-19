<template>
    <main>
        <div class="flex flex-wrap">
            <div
                v-for="image in links"
                :key="image.alt"
                class="p-2 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
                :class="{
                    'w-1/4': !isNatural, 
                    overlay: isHidden,
                    'relative mb-4  before:content-[``] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20': true,
                }"
            >
                <img
                    class="rounded-md"
                    :src="getImageSrc(image)"
                    :alt="image.alt"
                    loading="lazy"
                    :width="getWidth"
                    :height="getHeight"
                    @load="onImageLoad"
                />
                <div class="absolute inset-0 p-8 text-pink-300 flex flex-col z-50">
                    <div class="relative text-ellipsis overflow-hidden">
                        <h1 class="text-lg font-bold mb-3">{{ image.alt }}</h1>
                        <p class="text-sm">w/h {{ imageWidth }}x{{ imageHeight }}</p>
                        <p class="text-sm">natural w/h {{ naturalWidth }}x{{ naturalHeight }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
export default {
    name: "Gallery",
    props: {
        links: {
            required: true,
            type: Array as () => ImgApiSource[],
            default: () => [],
        },
        isHidden: {
            required: false,
            type: Boolean,
            default: false,
        },
        isNatural: {
            required: false,
            type: Boolean,
            default: false,
        },
        size: {
            required: false,
            type: String as () => ImgSource,
            default: "original",
        },
    },
    data() {
        return {
            imageWidth: 0,
            imageHeight: 0,
            naturalWidth: 0,
            naturalHeight: 0,
        }
    },
    computed: {
        getWidth() {
            if (this.isNatural) {
                return ""
            }
            return "1000"
        },
        getHeight() {
            if (this.isNatural) {
                return ""
            }
            return "1000"
        },
    },
    methods: {
        getImageSrc(image: ImgApiSource): string {
            if (this.size === "micro") {
                return image.src.original + "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=34&w=34"
            }
            return image.src[this.size]
        },
        onImageLoad(event: Event) {
            const imageElement = event.target as HTMLImageElement
            this.imageWidth = imageElement.width
            this.imageHeight = imageElement.height
            this.naturalWidth = imageElement.naturalWidth
            this.naturalHeight = imageElement.naturalHeight
        },
        simulateImageLoad() {
            console.log("simulateImageLoad ", this.$refs.imageRef)
            const imageElement = this.$refs.imageRef as HTMLImageElement
            if (imageElement) {
                this.onImageLoad({ target: imageElement } as unknown as Event)
            }
        },
    },
}
</script>
<style>
.overlay {
    position: relative;
}
.overlay:before {
    content: "";
    position: absolute;
    top: 5%;
    left: 5%;
    height: 90%;
    width: 90%;
    background: rgba(255, 255, 255, 0.98);
}
</style>

<template>
    <main>
        <div class="columns-2 md:columns-3 lg:columns-4">
            <div
                v-for="image in links"
                :key="image.original"
                class="before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
                :class="{
                    overlay: isHidden,
                    'relative mb-4  before:content-[``] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20': true,
                }"
            >
                <img
                    class="w-full rounded-md"
                    :src="image.original"
                    :alt="image.alt"
                    loading="lazy"
                    :width="image.width"
                    :height="image.height"
                />
                <div class="absolute inset-0 p-8 text-pink-300 flex flex-col z-50">
                    <div class="relative text-ellipsis overflow-hidden">
                        <h1 class="text-lg font-bold mb-3 ">{{ image.alt }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
interface ImgSource {
    original: string
    alt: string
    width: number
    height: number
}
export default {
    name: "Gallery",
    props: {
        links: {
            required: true,
            type: Array<ImgSource>,
            default: () => [],
        },
        isHidden: {
            required: false,
            type: Boolean,
            default: false,
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

<template>
    <main>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="image in links" :key="image.original" :class="{ 'overlay': isHidden}">
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
  position:relative;
}
.overlay:before {
  content:"";
  position: absolute;
  top:5%;
  left:5%;
  height:90%;
  width:90%;
  background: rgba(255, 255, 255, 0.98);
  z-index:999;
}
</style>
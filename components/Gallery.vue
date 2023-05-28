<template>
  <main>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="link in links" :key="link">
        <img class="h-auto max-w-full rounded-lg" :src="link" alt="">
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "Gallery",
  props: {
    links: {
      required: true,
      type: Array,
      default: () => []
    }
  }
}
</script>
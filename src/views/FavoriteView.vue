<template>
  <div class="manga-zone">
    <Manga></Manga>
  </div>
</template>

<style>
.manga-zone {
  background-size: cover;
  min-height: 100vh;
  background-image: url("C:\prog\Vue\portfolio\src\assets\starry-sky-2675322__480.jpg");
}
</style>

<script>
import Manga from "@/components/Manga.vue"

export default {
  name: "FavoriteView",
  components: {
    Manga,
  },
}
</script>

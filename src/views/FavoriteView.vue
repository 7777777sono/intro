<template>
  <div class="manga-zone">
    <Manga></Manga>
  </div>
</template>

<style>
@media screen and (max-width: 480px) {
}

@media screen and (min-width: 481px) and (max-width: 800px) {
}

@media screen and (min-width: 801px) and (max-width: 1080px) {
}

@media screen and (min-width: 1081px) and (max-width: 1500px) {
}

@media screen and (min-width: 1501px) {
}

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

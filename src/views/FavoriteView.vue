<template>
  <div class="manga-zone">
    <Manga></Manga>
  </div>
</template>

<script>
import Manga from "@/components/Manga.vue"

export default {
  name: "FavoriteView",
  components: {
    Manga,
  },
}
</script>

<template>
  <div class="extra-zone">
    <div class="extra-title-zone">
      <h2 class="extra-title">今までに作った簡単に遊べる機能</h2>
    </div>
    <Fortune></Fortune>
    <Palette></Palette>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@200&family=Noto+Serif+JP:wght@200;300&family=Playfair+Display:ital,wght@1,600&family=Shippori+Mincho&display=swap");

.extra-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  font-family: "Noto Serif HK", serif;
  font-family: "Noto Serif JP", serif;
  font-family: "Playfair Display", serif;
  font-family: "Shippori Mincho", serif;
}
</style>

<script>
import Palette from "@/components/Palette.vue"
import Fortune from "@/components/Fortune.vue"

export default {
  name: "ExtraView",
  components: {
    Palette,
    Fortune,
  },
}
</script>

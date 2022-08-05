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

.extra-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  font-family: "ＭＳ 明朝";
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

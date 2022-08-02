<template>
  <div class="extra-zone">
    <Fortune></Fortune>
    <Palette></Palette>
  </div>
</template>

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

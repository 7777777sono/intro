<template>
  <div class="fortune-zone">
    <div id="divination" class="divination">
      <h2 class="divination-title">
        あなたがどのような感情であるのかを占います
      </h2>
      <h1 class="fate">{{ result }}</h1>
      <img v-bind:src="url" class="fate" />
    </div>
    <div class="btn-list">
      <button v-on:click="xorResult(0)" class="btn">🧐</button>
      <button v-on:click="xorResult(1)" class="btn">🍇</button>
      <button v-on:click="xorResult(2)" class="btn">🧙</button>
      <button v-on:click="xorResult(3)" class="btn">🎄</button>
      <button v-on:click="xorResult(4)" class="btn">🎾</button>
      <button v-on:click="xorResult(5)" class="btn">🦄</button>
      <button v-on:click="xorResult(6)" class="btn">🐲</button>
      <button v-on:click="xorResult(7)" class="btn">🎮</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExtraView",
  data() {
    return {
      fortuneResult: [
        {
          result: "喜び",
          url: "./prog/Vue/portfolio/src/assets/image/happy.webp",
        },
        {
          result: "怒り",
          url: "./prog/Vue/portfolio/src/assets/image/angry.jpg",
        },
        {
          result: "悲しみ",
          url: "./prog/Vue/portfolio/src/assets/image/sad.webp",
        },
        {
          result: "疲れ",
          url: "./prog/Vue/portfolio/src/assets/image/image/tired.jpg",
        },
        {
          result: "うんざり",
          url: "./prog/Vue/portfolio/src/assets/image/image/boring.jpg",
        },
        {
          result: "驚き",
          url: "./prog/Vue/portfolio/src/assets/image/image/surprise.webp",
        },
        {
          result: "幸福",
          url: "./prog/Vue/portfolio/src/assets/image/image/happiness.webp",
        },
        {
          result: "信頼",
          url: "./prog/Vue/portfolio/src/assets/image/image/trust.webp",
        },
      ],
      result: "", // 占い結果を格納する変数
      url: "", // 占い結果に相当する画像を格納する変数
    }
  },
  methods: {
    xorResult(divination) {
      let ramdom = Math.floor(Math.random() * 7) //0~7の乱数を発生させる
      //クリックしたボタンの値とその乱数の排他的論理和によって要素数を指定し、占いの結果とする。
      this.url = this.fortuneResult[ramdom ^ divination].url
      this.result = this.fortuneResult[ramdom ^ divination].result
    },
  },
}
</script>

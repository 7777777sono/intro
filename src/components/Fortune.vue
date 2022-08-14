<template>
  <div class="fortune-zone">
    <div id="divination" class="divination">
      <h2 class="divination-title">
        あなたがどのような感情であるのかを占います
      </h2>
      <h1 class="fate">{{ result }}</h1>
      <div class="fate-img-zone">
        <img v-bind:src="url" class="fate-img" />
      </div>
    </div>
    <div v-if="clickJudge === false">
      <h3 class="fortune-attention">※下のボタンのどれかを押してください</h3>
    </div>
    <div v-if="clickJudge === false" class="btn-list">
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@200&family=Noto+Serif+JP:wght@200;300&family=Playfair+Display:ital,wght@1,600&family=Shippori+Mincho&display=swap");

.divination-title,
.fate,
.fortune-attention {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  font-family: "Noto Serif HK", serif;
  font-family: "Noto Serif JP", serif;
  font-family: "Playfair Display", serif;
  font-family: "Shippori Mincho", serif;
}

.fate-img-zone,
.btn-list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-list {
  margin-top: 20px;
  margin-bottom: 30px;
}

.fate-img {
  width: 50%;
  height: 400px;
}
</style>

<script>
export default {
  name: "ExtraView",
  data() {
    return {
      fortuneResult: [
        {
          result: "喜び",
          url: require("@/assets/happy.webp"),
        },
        {
          result: "怒り",
          url: require("@/assets/angry.jpg"),
        },
        {
          result: "悲しみ",
          url: require("@/assets/sad.webp"),
        },
        {
          result: "疲れ",
          url: require("@/assets/tired.jpg"),
        },
        {
          result: "うんざり",
          url: require("@/assets/boring.jpg"),
        },
        {
          result: "驚き",
          url: require("@/assets/surprise.webp"),
        },
        {
          result: "幸福",
          url: require("@/assets/happiness.webp"),
        },
        {
          result: "信頼",
          url: require("@/assets/trust.webp"),
        },
      ],
      result: "", // 占い結果を格納する変数
      url: "", // 占い結果に相当する画像を格納する変数
      clickJudge: false,
    }
  },
  methods: {
    xorResult(divination) {
      let ramdom = Math.floor(Math.random() * 7) // 0~7の乱数を発生させる
      // クリックしたボタンの値とその乱数の排他的論理和によって要素数を指定し、占いの結果とする。
      this.url = this.fortuneResult[ramdom ^ divination].url
      this.result = this.fortuneResult[ramdom ^ divination].result
      this.clickJudge = true
    },
  },
}
</script>

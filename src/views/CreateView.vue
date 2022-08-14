<template>
  <div class="create-zone">
    <div class="programming-language">
      <h3 class="programming-language-zone">経験しているプログラミング言語</h3>
      <div class="language-list">
        <h4
          v-for="(language, index) in languages"
          v-bind:key="index"
          v-bind:value="language"
          class="language-item"
        >
          {{ language }}
        </h4>
      </div>
    </div>
    <div class="deliverables-zone">
      <h1 class="deliverables-title">これまでの成果物</h1>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@200&family=Noto+Serif+JP:wght@200;300&family=Playfair+Display:ital,wght@1,600&family=Shippori+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Noto+Serif+HK:wght@200&family=Noto+Serif+JP:wght@200;300&family=PT+Serif:ital@1&family=Playfair+Display:ital,wght@1,600&family=Shippori+Mincho&display=swap");

@media screen and (max-width: 480px) {
  .language-item {
    font-size: 20px;
  }
}

@media screen and (min-width: 481px) {
  .language-item {
    font-size: 25px;
  }
}

.create-zone,
.deliverables-title {
  font-family: "Noto Serif HK", serif;
  font-family: "Noto Serif JP", serif;
  font-family: "Playfair Display", serif;
  font-family: "Shippori Mincho", serif;
}

.create-zone {
  background-image: url("C:\prog\Vue\portfolio\src\assets\pexels-denis-linine-714256.jpg");
  background-size: cover;
  min-height: 100vh;
}

.programming-language-zone {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
}

.language-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.language-item {
  font-family: "Merriweather", serif;
  font-family: "Noto Serif HK", serif;
  font-family: "Noto Serif JP", serif;
  font-family: "Playfair Display", serif;
  font-family: "PT Serif", serif;
  font-family: "Shippori Mincho", serif;
}

.deliverables-title {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      languages: ["C", "C++", "C#", "Java", "JavaScript", "Python"],
    }
  },
}
</script>

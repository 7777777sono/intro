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
.create-zone {
  background-image: url("C:\prog\Vue\portfolio\src\assets\pexels-denis-linine-714256.jpg");
  background-size: cover;
  min-height: 100vh;
  font-family: "serif";
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
  font-size: 25px;
  font-family: "Monotype Corsiva";
}

.deliverables-title {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "serif";
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

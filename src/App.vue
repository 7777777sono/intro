<template>
  <div>
    <!-- リセットcss -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
  </div>
  <header class="header" ref="header">
    <h1 class="title">my-portfolio</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/favorite">Favorite</router-link>
      <router-link to="/create">Programming</router-link>
      <router-link to="/extra">Extra</router-link>
    </nav>
  </header>
  <div v-bind:style="space" class="space"></div>
  <router-view />
  <div class="opinion-zone">
    <div class="opinion-title-zone">
      <h2 class="opinion-title">目安箱</h2>
      <h4 class="opinion-sub-title">
        ※改良点などがあったら以下の入力フォームから入力して下さい
      </h4>
    </div>
    <div class="opinion-input-zone">
      <textarea v-model="opinion" class="input-form"></textarea>
      <button v-on:click="opinionSubmit" class="submit-btn">送信</button>
    </div>
  </div>
</template>

<style>
.header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.space {
  background-color: black;
}

.title {
  color: white;
  padding: 10px;
  font-family: "Monotype Corsiva";
}

nav a {
  font-weight: bold;
  color: white;
  font-size: 20px;
  padding-right: 15px;
  text-decoration: none;
  font-family: "Monotype Corsiva";
}

nav a.router-link-exact-active {
  color: #36d0d3;
}

.opinion-zone {
  background-image: url("C:\prog\Vue\portfolio\src\assets\clouds-3400094__480.jpg");
  background-size: cover;
  min-height: 100vh;
}

.opinion-title-zone,
.opinion-input-zone {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.opinion-title,
.opinion-sub-title,
.submit-btn {
  font-family: "HG行書体";
}

.opinion-title,
.opinion-sub-title {
  color: azure;
}

.input-form {
  margin-top: 30px;
  width: 50%;
  height: 200px;
}

.submit-btn {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 20px;
}
</style>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      height: 0,
      space: {},
      opinion: "",
    }
  },
  methods: {
    async opinionSubmit() {
      await addDoc(collection(db, "opinion"), {
        opinion: this.opinion,
      })
      this.opinion = ""
      alert("ご協力ありがとうございます")
    },
  },
  mounted: function () {
    const header = this.$refs.header
    this.height = header.clientHeight // ヘッダの高さを得る。
    this.space["padding-top"] = this.height + "px" // ヘッダ分の高さを空ける
  },
}
</script>

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
      <button
        v-on:click="opinionSubmit"
        v-bind:disabled="opinion.length === 0"
        class="submit-btn"
      >
        送信
      </button>
      <div class="master-zone">
        <div v-if="masterMode" class="master-mode-zone">
          <div
            v-for="(comment, index) in opinionCollection"
            v-bind:key="index"
            v-bind:value="opinionCollection"
            class="opinion-collection"
          >
            {{ comment.opinion.opinion }}
            <div class="remove-btn-zone">
              <button v-on:click="opinionRemove(index)" class="remove-btn">
                削除
              </button>
            </div>
          </div>
          <button v-on:click="masterModeRelease" class="check-btn">解除</button>
        </div>
        <div v-else class="user-mode-zone">
          <h4 class="user-mode-zone-title">
            意見を閲覧するためのパスワードを入力してください
          </h4>
          <input
            type="password"
            v-model="masterCode"
            placeholder="masterCode"
          />
          <button v-on:click="getOpinion" class="check-btn">確認</button>
        </div>
      </div>
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
.opinion-input-zone,
.user-mode-zone,
.master-mode-zone {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.opinion-title,
.opinion-sub-title,
.submit-btn,
.user-mode-zone-title,
.check-btn,
.remove-btn {
  font-family: "HG行書体";
}

.opinion-title,
.opinion-sub-title,
.user-mode-zone-title,
.opinion-collection {
  color: azure;
}

.remove-btn-zone {
  display: flex;
  justify-content: flex-end;
}

.remove-btn {
  color: rgb(225, 81, 74);
  margin-bottom: 10px;
}

.opinion-collection {
  border: 2px solid azure;
  width: 500px;
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  font-size: 20px;
}

.input-form {
  margin-top: 30px;
  width: 50%;
  height: 200px;
}

.submit-btn,
.check-btn {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 20px;
}
</style>

<script>
import { doc, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      height: 0,
      space: {},
      opinion: "",
      opinionCollection: [], // 皆の意見の集まりそれに属するidを格納する配列
      masterCode: "", // 意見を閲覧するためのパスワード
      masterMode: false, // 意見の閲覧権限があるのかを判断する
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
    async getOpinion() {
      if (this.masterCode === "sonoda") {
        const querySnapshot = await getDocs(collection(db, "opinion"))
        querySnapshot.forEach((doc) => {
          this.opinionCollection.push({ id: doc.id, opinion: doc.data() })
        })
        this.masterMode = true
        this.masterCode = ""
      } else {
        alert("あなたに閲覧権限はありません")
      }
    },
    async opinionRemove(index) {
      await deleteDoc(doc(db, "opinion", this.opinionCollection[index].id))
      this.opinionCollection.splice(index, 1)
    },
    masterModeRelease() {
      this.masterMode = false
      this.opinionCollection.splice(0)
    },
  },
  mounted: function () {
    const header = this.$refs.header
    this.height = header.clientHeight // ヘッダの高さを得る。
    this.space["padding-top"] = this.height + "px" // ヘッダ分の高さを空ける
  },
}
</script>

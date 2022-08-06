<template>
  <div>
    <!-- リセットcss -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </div>
  <header class="header" ref="header">
    <h1 class="title">my-portfolio</h1>
    <div v-if="width < 801">
      <button type="button" class="menu-btn" v-on:click="open = !open">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div class="menu" v-bind:class="{ 'is-active': open }">
        <nav>
          <router-link to="/" v-on:click="open = !open">Home</router-link>
          <router-link to="/favorite" v-on:click="open = !open"
            >Favorite</router-link
          >
          <router-link to="/create" v-on:click="open = !open"
            >Programming</router-link
          >
          <router-link to="/extra" v-on:click="open = !open">Extra</router-link>
        </nav>
      </div>
    </div>
    <nav v-else>
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
@media screen and (max-width: 800px) {
  .menu-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    color: #fff;
  }

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("C:\prog\Vue\portfolio\src\assets\526782_m.jpg");
  }

  nav a {
    width: 100%;
    height: auto;
    padding: 0.5em 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 30px;
    color: #fff;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Monotype Corsiva";
  }

  .menu {
    transform: translateX(100vw);
    transition: all 0.3s linear;
  }
  /* アニメーション後のメニューの状態 */
  .menu.is-active {
    transform: translateX(0);
  }
}

@media screen and (min-width: 801px) {
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
}

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
  text-align: center;
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
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { doc, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      height: 0,
      width: 0,
      open: false,
      space: {},
      opinion: "",
      opinionCollection: [], // 皆の意見の集まりそれに属するidを格納する配列
      masterCode: "", // 意見を閲覧するためのパスワード
      masterMode: false, // 意見の閲覧権限があるのかを判断する
      userLogin: false,
      userData: null, //登録したユーザー情報を格納する変数
      userGetId: "",
      userGetName: "",
      userGetMail: "",
      myUid: "bwnMzGAyrxbEPr97iOVYPumSsVB3",
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
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        await signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            credential.accessToken
            result.user
            this.userGetId = result.user.uid
            this.userGetName = result.user.displayName
            this.userGetMail = result.user.email
          })
          .catch((error) => {
            error.code
            error.message
            error.email
            GoogleAuthProvider.credentialFromError(error)
          })
        if (this.myUid === this.userGetId) {
          this.userLogin = true
          const querySnapshot = await getDocs(collection(db, "opinion"))
          querySnapshot.forEach((doc) => {
            this.opinionCollection.push({ id: doc.id, opinion: doc.data() })
          })
          this.masterMode = true
        } else {
          this.masterModeRelease()
          alert("あなたに閲覧権限はありません")
        }
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
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.userGetId = ""
          this.userGetName = ""
          this.userGetMail = ""
          this.userLogin = false
        })
        .catch((error) => {
          // An error happened.
          console.error(error)
        })
    },
  },
  mounted: function () {
    this.width = window.innerWidth
    const header = this.$refs.header
    this.height = header.clientHeight // ヘッダの高さを得る。
    this.space["padding-top"] = this.height + "px" // ヘッダ分の高さを空ける
  },
  beforeUnmount: function () {
    if (this.userLogin) {
      this.masterModeRelease()
    }
  },
}
</script>

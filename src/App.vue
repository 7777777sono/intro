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
</style>

<script>
export default {
  data() {
    return {
      height: 0,
      space: {},
    }
  },
  mounted: function () {
    const header = this.$refs.header
    this.height = header.clientHeight // ヘッダの高さを得る。
    this.space["padding-top"] = this.height + "px" // ヘッダ分の高さを空ける
  },
}
</script>

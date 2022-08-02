<template>
  <div class="home">
    <div class="my-zone">
      <div class="name-zone">
        <h2>園田 海斗</h2>
        <h3>Sonoda Kaito</h3>
      </div>
      <div class="age-zone">
        <h3>20歳</h3>
      </div>
    </div>
    <div class="detail-zone">
      <div class="university-zone">
        <h3 class="sub-title">大学</h3>
        <h4>福岡大学</h4>
      </div>
      <div class="course-zone">
        <h3 class="sub-title">学部・学科</h3>
        <h4>工学部 電子情報工学科</h4>
      </div>
      <div class="sns-zone">
        <h3 class="sub-title">インスタグラム</h3>
        <h4>@sonoda7777777</h4>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  background-image: url("C:\prog\vue\portfolio\src\assets\frank-mckenna-OD9EOzfSOh0-unsplash.jpg");
  background-size: cover;
  min-height: 100vh;
}

.my-zone {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.name-zone {
  padding-top: 30px;
  padding-left: 30px;
}

.age-zone {
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.detail-zone {
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
}

.sub-title {
  padding-bottom: 20px;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
}
</script>

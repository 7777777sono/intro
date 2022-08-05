<template>
  <div class="home">
    <div class="my-zone">
      <div class="name-zone">
        <h2>園田 海斗</h2>
        <h3>Sonoda Kaito</h3>
      </div>
      <div class="age-zone">
        <h3>{{ age }}歳</h3>
      </div>
    </div>
    <div class="detail-zone">
      <div class="university-zone">
        <h3 class="sub-title">大学</h3>
        <a
          href="https://www.fukuoka-u.ac.jp/"
          target="_blank"
          rel="noopener noreferrer"
          class="factor"
          >福岡大学</a
        >
      </div>
      <div class="course-zone">
        <h3 class="sub-title">学部・学科</h3>
        <a
          href="https://w3.tl.fukuoka-u.ac.jp/"
          target="_blank"
          rel="noopener noreferrer"
          class="factor"
          >工学部 電子情報工学科</a
        >
      </div>
      <div class="sns-zone">
        <h3 class="sub-title">インスタグラム</h3>
        <a
          href="https://z-p15.www.instagram.com/sonoda7777777/"
          target="_blank"
          rel="noopener noreferrer"
          class="factor"
          >@sonoda7777777</a
        >
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 480px) {
  .my-zone {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name-zone {
    padding-top: 30px;
    padding-left: 30px;
  }

  .name-zone h2,
  .name-zone h3,
  .age-zone h3 {
    font-size: 30px;
  }

  .age-zone {
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .detail-zone {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "HG正楷書体-PRO";
  }

  .sub-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 30px;
  }

  .factor {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 20px;
  }
}

@media screen and (min-width: 481px) and (max-width: 800px) {
  .my-zone {
    display: flex;
    justify-content: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "HG正楷書体-PRO";
  }

  .sub-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 30px;
  }

  .factor {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 20px;
  }
}

@media screen and (min-width: 801px) and (max-width: 1500px) {
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
    font-family: "HG正楷書体-PRO";
  }

  .sub-title {
    padding-bottom: 20px;
    font-size: 33px;
  }

  .factor {
    color: black;
    font-size: 23px;
  }
}

@media screen and (min-width: 1501px) {
  .my-zone {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .name-zone h2,
  .name-zone h3,
  .age-zone h3 {
    font-size: 50px;
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
    font-family: "HG正楷書体-PRO";
  }

  .sub-title {
    padding-bottom: 20px;
    font-size: 40px;
  }

  .factor {
    color: black;
    font-size: 30px;
  }
}

.home {
  background-image: url("C:\prog\vue\portfolio\src\assets\frank-mckenna-OD9EOzfSOh0-unsplash.jpg");
  background-size: cover;
  min-height: 100vh;
}

.my-zone {
  font-family: "HG正楷書体-PRO";
}

.factor:hover {
  color: rgb(17, 0, 255);
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
  data() {
    return {
      birthday: {
        year: 2002,
        month: 2,
        date: 19,
      },
      age: 0, // 年齢
    }
  },
  methods: {
    getAge() {
      //今日
      let today = new Date()

      //今年の誕生日
      let thisYearsBirthday = new Date(
        today.getFullYear(),
        this.birthday.month - 1,
        this.birthday.date
      )

      //年齢
      this.age = today.getFullYear() - this.birthday.year

      if (today < thisYearsBirthday) {
        //今年まだ誕生日が来ていない
        this.age--
      }
    },
  },
  mounted: function () {
    this.getAge()
  },
}
</script>

<template>
  <div class="manga-main-zone">
    <h3 class="manga-zone-title">好きな漫画</h3>
    <div class="favorite-manga-zone">
      <a
        v-for="(manga, index) in mangas"
        v-bind:key="index"
        v-bind:value="manga"
        v-bind:href="manga.url"
        target="_blank"
        rel="noopener noreferrer"
        class="manga-list"
        >{{ manga.title }}</a
      >
    </div>
  </div>
  <div class="manga-image-favorite-zone">
    <h3 class="manga-image-favorite-zone-title">
      好きな漫画の自分のお気に入りのシーン
    </h3>
    <carousel
      ref="carousel"
      :per-page="1"
      :loop="true"
      :mouseDrag="true"
      :touchDrag="true"
      :pagination-padding="5"
      :speed="1000"
      :autoplay="5000"
    >
      <slide
        v-for="(scene, index) in scenes"
        v-bind:key="index"
        v-bind:value="scenes"
        class="slide-zone"
      >
        <img v-bind:src="scene.img" class="slick-img" />
        <div class="slick-reference">引用: {{ scene.reference }}より</div>
      </slide>
      <template #addons>
        <pagination v-if="width >= 450" />
      </template>
    </carousel>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@200&family=Noto+Serif+JP:wght@200;300&family=Playfair+Display:ital,wght@1,600&family=Shippori+Mincho&display=swap");

@media screen and (max-width: 480px) {
  .manga-zone-title {
    font-size: 30px;
  }

  .favorite-manga-zone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .manga-list {
    padding-top: 10px;
    font-size: 20px;
  }

  .manga-image-favorite-zone-title {
    font-size: 30px;
    padding: 30px;
  }
}

@media screen and (min-width: 481px) and (max-width: 800px) {
  .manga-zone-title {
    font-size: 30px;
  }

  .favorite-manga-zone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .manga-list {
    padding-top: 10px;
    font-size: 20px;
  }

  .manga-image-favorite-zone-title {
    font-size: 30px;
    padding: 30px;
  }
}

@media screen and (min-width: 801px) and (max-width: 1080px) {
  .manga-zone-title {
    font-size: 30px;
  }

  .favorite-manga-zone {
    display: flex;
    flex-flow: row wrap;
  }

  .manga-list {
    padding-top: 15px;
    padding-left: 50px;
    font-size: 20px;
    width: fit-content;
    /* 1列を3つにするための33% */
    width: 33%;
  }

  .manga-image-favorite-zone-title {
    font-size: 30px;
    padding: 30px;
  }
}

@media screen and (min-width: 1081px) and (max-width: 1500px) {
  .manga-zone-title {
    font-size: 30px;
  }

  .favorite-manga-zone {
    display: flex;
    flex-flow: row wrap;
  }

  .manga-list {
    padding-top: 5px;
    padding-left: 50px;
    font-size: 20px;
    width: fit-content;
    /* 1列を4つにするための25% */
    width: 25%;
  }

  .manga-image-favorite-zone-title {
    font-size: 30px;
    padding: 30px;
  }
}

@media screen and (min-width: 1501px) {
  .manga-zone-title {
    font-size: 40px;
  }

  .favorite-manga-zone {
    display: flex;
    flex-flow: row wrap;
  }

  .manga-list {
    padding-top: 5px;
    padding-left: 50px;
    font-size: 25px;
    width: fit-content;
    /* 1列を4つにするための25% */
    width: 25%;
  }

  .manga-image-favorite-zone-title {
    font-size: 40px;
    padding: 30px;
  }

  .slick-reference {
    padding-top: 7px;
    font-size: 20px;
  }
}

.manga-zone-title,
.manga-image-favorite-zone-title,
.manga-list {
  font-family: "Noto Serif HK", serif;
  font-family: "Noto Serif JP", serif;
  font-family: "Playfair Display", serif;
  font-family: "Shippori Mincho", serif;
}

.manga-zone-title {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.manga-image-favorite-zone {
  padding-bottom: 50px;
  z-index: -1;
}

.manga-image-favorite-zone-title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.manga-list {
  color: white;
}

.manga-list:hover {
  color: #36d0d3;
}

.slide-zone {
  display: flex;
  flex-direction: column;
}

.slick-img {
  height: 270px;
  width: 45%;
  display: flex;
  margin: 0 auto;
}

.slick-reference {
  color: white;
  margin-top: 10px;
}
</style>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination } from "vue3-carousel"

export default {
  name: "FavoriteView",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      mangas: [
        {
          title: "ハイキュー!!",
          url: "https://www.shonenjump.com/j/rensai/haikyu.html",
        },
        {
          title: "呪術廻戦",
          url: "https://www.shonenjump.com/j/rensai/jujutsu.html",
        },
        {
          title: "ブラッククローバー",
          url: "https://www.shonenjump.com/j/rensai/bclover.html",
        },
        {
          title: "ワールドトリガー",
          url: "https://www.shonenjump.com/j/rensai/world.html",
        },
        {
          title: "Dr.STONE",
          url: "https://www.shonenjump.com/j/rensai/drstone.html",
        },
        {
          title: "ONE PIECE",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
        },
        {
          title: "僕のヒーローアカデミア",
          url: "https://www.shonenjump.com/j/rensai/myhero.html",
        },
        {
          title: "暗殺教室",
          url: "https://www.shonenjump.com/j/rensai/ansatsu.html",
        },
        {
          title: "NARUTO-ナルト-",
          url: "https://www.shonenjump.com/j/rensai/naruto.html",
        },
        { title: "ダイヤのA", url: "https://diaace.com/" },
      ],
      scenes: [
        {
          img: "https://livedoor.blogimg.jp/anigei-mangabox/imgs/4/d/4dd6bd91-s.jpg",
          reference: "ワールドトリガー22巻",
        },
        {
          img: "https://manga-comic-netabare.com/wp-content/uploads/2020/08/CnadM5kWAAAPjjy-768x689.jpg",
          reference: "ワールドトリガー9巻",
        },
        {
          img: "https://newsinfomation.net/wp-content/uploads/2021/07/8-11.jpg",
          reference: "ワールドトリガー12巻",
        },
        {
          img: require("@/assets/スクリーンショット-2021-02-20-21.42.23-1025x720.png"),
          reference: "ワールドトリガー8巻",
        },
        {
          img: "https://blogimg.goo.ne.jp/user_image/6d/da/4375040fc5a40054eb69fea787ed1359.jpg?1597877727",
          reference: "ハイキュー！！17巻",
        },
        {
          img: "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/532/880/original.png?1595133850",
          reference: "ハイキュー！！16巻",
        },
        {
          img: "https://manga-netabare-kanso.com/wp-content/uploads/2018/04/%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%A5%E3%83%BC298%E8%A9%B1%E6%9C%88%E5%B3%B6%EF%BC%88%E3%83%84%E3%83%83%E3%82%AD%E3%83%BC%EF%BC%89.png",
          reference: "ハイキュー！！34巻",
        },
        {
          img: "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/631/121/original.?1618474647",
          reference: "ブラッククローバー1巻",
        },
        {
          img: "https://manga-comic-netabare.com/wp-content/uploads/2020/01/20171006093355.jpg",
          reference: "ブラッククローバー6巻",
        },
        {
          img: "https://1.bp.blogspot.com/-8XKF_u8Q0mE/Xs5gJlBo_UI/AAAAAAAAFGk/0h5sD9APGXgsTDRZuI7uemQARZqW_Ii6wCPcBGAYYCw/s0/kokusen-min.jpg",
          reference: "呪術廻戦7巻",
        },
        {
          img: "https://manga-netabare-kanso.com/wp-content/uploads/2021/01/drstone_senku_02-768x876.jpg",
          reference: "Dr.STONE1巻",
        },
        {
          img: "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/587/296/original.jpg?1608533541",
          reference: "Dr.STONE9巻",
        },
        {
          img: "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181128/20181128022834.png",
          reference: "ONE PIECE50巻",
        },
        {
          img: "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181203/20181203154632.png",
          reference: "ONE PIECE56巻",
        },
        {
          img: "https://manga-netabare-kanso.com/wp-content/uploads/2020/05/ca9bdb64-e1576884259455.jpg",
          reference: "僕のヒーローアカデミア26巻",
        },
        {
          img: "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEgzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f046414a51a690aa0d184569d9ecc1add7963488/8.jpg",
          reference: "暗殺教室8巻",
        },
        {
          img: "https://assets.st-note.com/production/uploads/images/9796525/picture_pc_656a28370f766dfb922a236b4129a253.jpg?width=800",
          reference: "NARUTO-ナルト-27巻",
        },
        {
          img: "https://animemiru.jp/wp-content/uploads/2018/08/naruto-gai06.jpg",
          reference: "NARUTO-ナルト-67巻",
        },
        {
          img: "https://www.cmoa.jp/cc/template/common/titleinfo/quotation/data/39221/images/39221_04.png",
          reference: "ダイヤのA2巻",
        },
      ],
      width: 0,
    }
  },
  mounted: function () {
    this.width = window.innerWidth
  },
}
</script>

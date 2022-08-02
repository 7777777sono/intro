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
    <div
      v-for="(scene, index) in scenes"
      v-bind:key="index"
      v-bind:value="scenes"
    >
      <img v-bind:src="scene" class="slick-img" />
    </div>
  </div>
</template>

<style>
.manga-zone-title {
  font-size: 30px;
  padding: 30px;
}

.favorite-manga-zone {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.manga-list {
  padding-top: 5px;
  padding-left: 10px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  width: fit-content;
}

.manga-list:hover {
  color: #3650d3;
}
</style>

<script>
export default {
  name: "FavoriteView",
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
        "https://livedoor.blogimg.jp/anigei-mangabox/imgs/4/d/4dd6bd91-s.jpg",
        "https://manga-comic-netabare.com/wp-content/uploads/2020/08/CnadM5kWAAAPjjy-768x689.jpg",
        "https://newsinfomation.net/wp-content/uploads/2021/07/8-11.jpg",
        "https://blogimg.goo.ne.jp/user_image/6d/da/4375040fc5a40054eb69fea787ed1359.jpg?1597877727",
        "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/532/880/original.png?1595133850",
        "https://manga-netabare-kanso.com/wp-content/uploads/2018/04/%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%A5%E3%83%BC298%E8%A9%B1%E6%9C%88%E5%B3%B6%EF%BC%88%E3%83%84%E3%83%83%E3%82%AD%E3%83%BC%EF%BC%89.png",
        "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/631/121/original.?1618474647",
        "https://manga-comic-netabare.com/wp-content/uploads/2020/01/20171006093355.jpg",
        "https://1.bp.blogspot.com/-8XKF_u8Q0mE/Xs5gJlBo_UI/AAAAAAAAFGk/0h5sD9APGXgsTDRZuI7uemQARZqW_Ii6wCPcBGAYYCw/s0/kokusen-min.jpg",
        "https://manga-netabare-kanso.com/wp-content/uploads/2021/01/drstone_senku_02-768x876.jpg",
        "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/587/296/original.jpg?1608533541",
        "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181128/20181128022834.png",
        "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181203/20181203154632.png",
        "https://manga-legend.com/wp-content/uploads/2018/08/%E3%83%87%E3%82%AF%E3%80%80%E3%81%8B%E3%81%A3%E3%81%93%E3%81%84%E3%81%84%E3%82%B7%E3%83%BC%E3%83%B3-3-198x300.png",
        "https://manga-netabare-kanso.com/wp-content/uploads/2020/05/ca9bdb64-e1576884259455.jpg",
        "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEgzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f046414a51a690aa0d184569d9ecc1add7963488/8.jpg",
        "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHIzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8de349bb8bb8c037e77836fc1d7cfbdda6da176d/21900085154cd16fd89.jpg",
        "https://assets.st-note.com/production/uploads/images/9796525/picture_pc_656a28370f766dfb922a236b4129a253.jpg?width=800",
        "https://animemiru.jp/wp-content/uploads/2018/08/naruto-gai06.jpg",
        "https://www.cmoa.jp/cc/template/common/titleinfo/quotation/data/39221/images/39221_04.png",
        "https://www.cmoa.jp/cc/template/common/titleinfo/quotation/data/39221/images/39221_02.png",
      ],
    }
  },
}
</script>

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
      <table class="create-table" align="center" valign="middle">
        <thead>
          <tr>
            <th>No.</th>
            <th>Language</th>
            <th>Title</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(create, index) in createLists"
            v-bind:key="index"
            v-bind:value="create"
          >
            <th>{{ index }}</th>
            <th>{{ create.language }}</th>
            <th>{{ create.title }}</th>
            <th>
              <a
                v-bind:href="create.url"
                target="_blank"
                rel="noopener noreferrer"
                class="create-table-url"
              >
                {{ create.url }}
              </a>
            </th>
          </tr>
        </tbody>
      </table>
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

  .create-table {
    font-size: 15px;
  }
}

@media screen and (min-width: 481px) and (max-width: 800px) {
  .create-table {
    font-size: 17px;
  }
}

@media screen and (max-width: 801px) {
  .create-table {
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
  background-image: url("C:\prog\Vue\portfolio\src\assets\henrique-setim-XuD9vHw6yeY-unsplash.jpg");
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

.deliverables-zone {
  padding-bottom: 30px;
}

.deliverables-title {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.create-table {
  width: 80%;
  border-collapse: collapse;
  table-layout: fixed;
}

.create-table * {
  border: 1px #000 solid;
}

.create-table-url {
  color: black;
  word-break: break-all;
  border: none;
}

.create-table-url:hover {
  color: blue;
}

tr {
  border: 1px;
  text-align: center;
  vertical-align: middle;
}
</style>

<script>
export default {
  data() {
    return {
      languages: [
        "C",
        "C++",
        "C#",
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "Ruby",
      ],
      createLists: [
        {
          language: "Python",
          title: "Web上で行うソケット間通信",
          url: "https://7777777sono.github.io/socket/",
        },
        {
          language: "Java",
          title: "テトリス",
          url: "https://7777777sono.github.io/tetris/",
        },
        {
          language: "TypeScript",
          title: "競プロトレーニング",
          url: "https://competition-programming.web.app/",
        },
        {
          language: "TypeScript, Ruby",
          title: "Task Tracker",
          url: "https://competition-programming.web.app/",
        },
      ], // 成果物の情報を格納するオブジェクトの配列
    }
  },
}
</script>

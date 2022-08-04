<template>
  <div class="palette-zone">
    <div class="palette-title-zone">
      <h1 class="palette-title">パレット</h1>
    </div>
    <div class="app">
      <div
        class="palette"
        v-bind:style="{
          backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`,
        }"
        v-on:click="colorDecision"
        v-on:mousemove="colorChange"
      ></div>
      <p>rgba( {{ red }}, {{ green }}, {{ blue }}, {{ opacity }} )</p>
      <!-- rangeで色を指定できるようにした -->
      <div class="red">赤</div>
      <input type="range" min="0" max="255" v-model="red" />
      <div class="green">緑</div>
      <input type="range" min="0" max="255" v-model="green" />
      <div class="blue">青</div>
      <input type="range" min="0" max="255" v-model="blue" />
      <div class="opacity">透明度</div>
      <input type="range" min="0" max="1" step="0.01" v-model="opacity" />
      <button v-on:click="colorDecision" class="color-decision">
        この色に決定
      </button>
      <div class="colors-container">
        <div
          v-for="color in colors"
          v-bind:key="color"
          v-bind:color="color"
          v-bind:style="{
            backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`,
          }"
          v-on:click="pastColorDecision(color)"
          class="mini-palette"
        ></div>
      </div>
    </div>
    <div>
      <div class="draw-title-zone">
        <h2 class="draw-title">
          パレットで作った色を使ってお絵描きしてみよう！
        </h2>
      </div>
      <div id="canvas-area" class="canvas-area">
        <canvas
          id="myCanvas"
          width="255"
          height="255"
          v-on:mousedown="drawStart"
          v-on:mouseup="drawEnd"
          v-on:mouseout="drawEnd"
          v-on:mousemove="draw"
        ></canvas>
      </div>
      <div class="tool-area">
        <button class="pen-button" v-on:click="pen">ペン</button>
        <button class="clear-button" v-on:click="clear">クリア</button>
        <button class="eraser-button" v-on:click="eraser">消しゴム</button>
      </div>
      <div class="pen-width">
        <div>ペンの太さ {{ penWidth }}px</div>
        <input type="range" min="1" max="32" v-model="penWidth" />
        <div class="click-please">
          ※太さを変えたらペンボタンをクリックして下さい。
        </div>
        <div>消しゴムの大きさ {{ eraserWidth }}px</div>
        <input type="range" min="1" max="32" v-model="eraserWidth" />
        <div class="click-please">
          ※太さを変えたら消しゴムボタンをクリックして下さい。
        </div>
      </div>
      <div class="current-draw-mode">{{ currentDrawMode }}</div>
    </div>
  </div>
</template>

<style>
.palette-title {
  margin: 0; /* デフォルトCSS打ち消し */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.palette {
  width: 255px;
  height: 255px;
}

.red {
  font-size: 1.5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  color: transparent;
  background: repeating-linear-gradient(
    0deg,
    #c62828 0.1em,
    #ef5350 0.2em,
    #ffebee 0.3em,
    #ef5350 0.4em,
    #c62828 0.5em
  );
  background-clip: text;
}

.green {
  font-size: 1.5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  color: transparent;
  background: repeating-linear-gradient(
    0deg,
    #28c635 0.1em,
    #3fdf54 0.2em,
    #ffebee 0.3em,
    #50ef85 0.4em,
    #28c628 0.5em
  );
  background-clip: text;
}

.blue {
  font-size: 1.5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  color: transparent;
  background: repeating-linear-gradient(
    0deg,
    #0277bd 0.1em,
    #4fc3f7 0.2em,
    #e1f5fe 0.3em,
    #4fc3f7 0.4em,
    #0277bd 0.5em
  );
  background-clip: text;
}

.opacity {
  font-size: 1.5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 1);
}

.color-decision {
  margin-top: 1%;
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding: 0 30px;
  font-size: 19px;
  height: 40px;
  line-height: 40px!;
  background: #24242c;
  font-size: 20px;
  color: rgb(6, 241, 131);
  transition: 0.4s;
  border: none;
  z-index: -1;
}

.color-decision:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border: none;
  border-left: solid 21px white;
  border-bottom: solid 41px transparent;
  transition: 0.4s;
}

.color-decision:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border: none;
  border-left: solid 21px transparent;
  border-bottom: solid 41px white;
  transition: 0.4s;
}

.color-decision:hover:before,
.color-decision:hover:after {
  border-left-width: 25px;
}

.mini-palette {
  min-width: 60px;
  height: 60px;
}

.colors-container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding-top: 8px;
}

.draw-title {
  text-align: center;
  font-weight: bold;
  color: transparent;
  background: repeating-linear-gradient(
    45deg,
    #f5b090 0.1em 0.2em,
    #fcd7a1 0.2em 0.3em,
    #fff9b1 0.3em 0.4em,
    #a5d4ad 0.4em 0.5em,
    #a3bce2 0.5em 0.6em,
    #a59aca 0.7em 0.8em,
    #cfa7cd 0.8em 0.9em
  );
  /* background-clip は要素の背景を境界ボックス、パディングボックス、コンテンツボックスのどれまで拡張するかを設定する */
  background-clip: text;
}

.canvas-area {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

#myCanvas {
  border: 1px solid black;
  height: 255px;
  width: 255px;
  /* 色をcanvas内に反映させるため */
  opacity: 0.9;
}

.current-draw-mode {
  font-size: 1.5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 20px;
}

.tool-area {
  margin-top: 1%;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}

.clear-button {
  margin: 3px;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #aae5e9 0%, #46d6f0 100%);
  transition: 0.4s;
}

.clear-button:hover {
  background-image: linear-gradient(45deg, #aae5e9 0%, #0ae9f1 100%);
}

.eraser-button {
  margin: 3px;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #ffc107 0%, #f7926a 100%);
  transition: 0.4s;
}

.eraser-button:hover {
  background-image: linear-gradient(45deg, #ffc107 0%, #f54606 100%);
}

.pen-button {
  margin: 3px;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #abe7ba 0%, #4df076 100%);
  transition: 0.4s;
}

.pen-button:hover {
  background-image: linear-gradient(45deg, #abe7ba 0%, #0bf52a 100%);
}

.pen-width {
  font-size: 1.5em;
  text-align: center;
  line-height: 0.95em;
  font-weight: bold;
  margin-top: 1%;
}

.click-please {
  font-size: 0.5rem;
}
</style>

<script>
export default {
  name: "ExtraView",
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
      opacity: 1,
      colors: [],
      canvas: null,
      context: null,
      isDraw: false,
      drawMode: "pen",
      currentDrawMode: "ペン",
      penWidth: 1,
      eraserWidth: 32,
    }
  },
  mounted() {
    this.canvas = document.querySelector("#myCanvas")
    this.context = this.canvas.getContext("2d")
    // 線端の形状を丸くする
    this.context.lineCap = "round"
    // 線の接合箇所の形状を丸くする
    this.context.lineJoin = "round"
    //線の幅
    this.context.lineWidth = this.penWidth
    // 線・輪郭の色やスタイルを指定する
    this.context.strokeStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`
  },
  methods: {
    colorDecision: function () {
      //描く色をもパレットと同じ色にする
      if (this.drawMode === "pen") {
        this.context.strokeStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`
      } else {
        this.context.strokeStyle = "white"
      }
      this.colors.push({
        red: this.red,
        green: this.green,
        blue: this.blue,
        opacity: this.opacity,
      })
    },
    //paletteの位置でX座標で赤,Y座標で緑が変わる
    colorChange: function (e) {
      this.red = e.offsetX
      this.green = e.offsetY
    },
    // クリックしたミニパレットの色をパレットに表示する
    pastColorDecision: function (color) {
      this.red = color.red
      this.green = color.green
      this.blue = color.blue
      this.opacity = color.opacity
      //描く色をもパレットと同じ色にする
      if (this.drawMode === "pen") {
        this.context.strokeStyle = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.opacity})`
      } else {
        this.context.strokeStyle = "white"
      }
    },
    // 描画
    draw: function (e) {
      let x = e.layerX
      let y = e.layerY
      if (!this.isDraw) {
        return
      }
      this.context.lineTo(x, y)
      this.context.stroke()
    },
    // 描画開始（mousedown）
    drawStart: function (e) {
      // マウスイベント発火時の、マウスポインタの水平位置のピクセル数値
      let x = e.layerX
      // マウスイベント発火時の、マウスポインタの垂直位置のピクセル数値
      let y = e.layerY
      // beginPath：新しいpath情報作成が始まる
      this.context.beginPath()
      // lineTo：現在の座標と、指定された座標を結ぶ直線を作る
      this.context.lineTo(x, y)
      this.context.stroke()
      this.isDraw = true
    },
    // 描画終了（mouseup, mouseout）
    drawEnd: function () {
      // closePath：現在の座標とpath開始時点を結ぶ直線を作る
      this.context.closePath()
      this.isDraw = false
    },
    // ペン
    pen: function () {
      // カーソル変更
      this.drawMode = "pen"
      this.currentDrawMode = "ペン"
      // 描画設定
      this.context.lineCap = "round"
      this.context.lineJoin = "round"
      this.context.lineWidth = this.penWidth
      this.context.strokeStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`
    },
    // 消しゴムモード
    eraser: function () {
      // カーソル変更
      this.drawMode = "eraser"
      this.currentDrawMode = "消しゴム"
      // 描画設定
      this.context.lineCap = "square"
      this.context.lineJoin = "square"
      this.context.lineWidth = this.eraserWidth
      this.context.strokeStyle = "white"
    },
    // canvasをクリア
    clear: function () {
      // clearRect(x, y, w, h)メソッドは、四角形の形にクリアする際に使用する
      // xは四角形の左上のx座標,yは四角形の左上のy座標,wは四角形の幅,h四角形の高さである
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
  },
}
</script>

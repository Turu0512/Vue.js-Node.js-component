import Vue from 'vue'

// Components
import NumberGuess from './components/NumberGuess.vue'

const app = new Vue({
  el: '#app',
  data: {
    message: 'スタートボタンを押してください',
    tryCountLeft: 0
  },
  components: {
    NumberGuess
  },
  methods: {
    onStart (tryCountLeft) {
      this.message = 'スタート！ 🚀'
      this.tryCountLeft = tryCountLeft
    },
    onCollect (tryCountLeft) {
      this.message = '当たり！ 🎉'
      this.tryCountLeft = tryCountLeft
    },
    onLower (tryCountLeft) {
      this.message = 'もっと小さいです 👇'
      this.tryCountLeft = tryCountLeft
    },
    onHigher (tryCountLeft) {
      this.message = 'もっと大きいです️ ️👆'
      this.tryCountLeft = tryCountLeft
    },
    onLose () {
      this.message = 'ゲームオーバー 👻'
      this.tryCountLeft = tryCountLeft
    }
  }
})
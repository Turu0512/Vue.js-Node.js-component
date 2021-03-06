import Vue from 'vue'

// Style
import './app.scss'

// Components
import MarkdownPanel from './components/MarkdownPanel.vue'

const app = new Vue({
  el: '#app',
  components: {
    MarkdownPanel
  }
})
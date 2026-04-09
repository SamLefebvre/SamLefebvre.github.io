import { defineClientConfig } from '@vuepress/client'
import githubcorner from './root-components/githubcorner.vue'
// import InfoCard from './components/InfoCard.vue'
// import MediumZoom from './components/MediumZoom.vue'
// import Posts from './components/Posts.vue'
// import MathJax from './components/MathJax.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component("githubcorner", githubcorner)
  },
  rootComponents: [
    githubcorner, // This keeps the element permanently mounted at the app root
  ],
})
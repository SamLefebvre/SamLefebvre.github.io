import { defineClientAppEnhance } from '@vuepress/client'
import githubcorner from './components/githubcorner.vue'
import InfoCard from './components/InfoCard.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
  app.component("githubcorner", githubcorner);
  app.component("InfoCard", InfoCard);
})
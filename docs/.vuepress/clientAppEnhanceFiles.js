import { defineClientAppEnhance } from '@vuepress/client'
import githubcorner from './components/githubcorner.vue'
import InfoCard from './components/InfoCard.vue'
import MediumZoom from './components/MediumZoom.vue'
import Posts from './components/Posts.vue'
import MathJax from './components/MathJax.vue'

export default

 defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
  app.component("githubcorner", githubcorner);
  app.component("InfoCard", InfoCard);
  app.component("Posts", Posts);
  app.component("MediumZoom", MediumZoom);
  app.component("EnableMathJax", MathJax);
},)






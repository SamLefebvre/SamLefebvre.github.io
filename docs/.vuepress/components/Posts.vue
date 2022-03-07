<template>
  <div class="post-container">
    <div v-for="page in pages" :key='page.path' class="post-card">
        <RouterLink class="article-image" :to="page.path">
          <a :href="page.path"><img :src="$withBase('/images/' + page.frontmatter.posterImage)" @error="imgUrlAlt"  alt="image"></a>
        </RouterLink>
        <div class="page-detail">
          <RouterLink class="article-imag" :to="page.path">{{ page.title }}</RouterLink>

          <div class="page-description">{{ filterRemove(page.frontmatter.description) }}</div>
          
          <div class="page-excerpt">{{ page.frontmatter.creationDate || '2020-2022'  }}</div>
          <RouterLink class="page-excerpt" :to="page.path">Plus de détails</RouterLink>
          
        </div>
      
    </div>

   
  </div>
</template>

<script>
import myPages from '@temp/my-data'

export default {
  name: 'Posts',
  props: ['articleType'],
  data() {
    return {
      pages: [],
      excerpts: []
    }
  },
  mounted() {
    myPages.forEach(page => {
      if (page.frontmatter.type === this.articleType) {
        this.pages.push(page)
        // this.excerpts.push(page.excerpt)        
        //console.log(this.articleType);
      }
    })
    
    this.pages.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1);

  },
  methods: {
    imgUrlAlt(event) {
    event.target.src = "/images/hero.png"
    },
    filterRemove(text) {
      var node = document.createElement('div');
      node.innerHTML = text;

      var tag = "</h1>";

      var content = node.innerHTML
      var startPos = content.indexOf(tag);

      if (startPos>0){
        content = content.slice(startPos + tag.length,content.length);
        content = content.trim();
      }
      var clamp = '...';
      var length = 200;
      content=  content.length > length ? content.slice(0, length) + clamp : content;
      
      return content;      
    },
    
  },
  

}
// Debug, show all pages in console
// console.log(myPages);
</script>

<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.page-description{
  /* display: flex; */
  flex-wrap: wrap;
  width: 100%;
  display: inline-block;
  text-decoration:none;
  color:var(--c-text);
}
.page-excerpt{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 5px;
}
.page-detail{
  /* display: flex; */
  /* flex-wrap: wrap; */
  justify-content: space-between;
  display: flex;
    height: 100%;
    margin-left: 10px;
    width: 100%;
    flex-wrap: wrap;
}
.post-card {
  width:var(--content-width);
  /* height: 150px; */
  margin: 10px 0px 10px 0px;
  border-bottom: 2px solid var(--c-border);
  border-top: 2px solid var(--c-border);
  /* border-radius: 5px; */
  padding: 10px;
  display: flex;
  align-items: flex-start;
}
.article-image {
  /* height:150px; */
  width: 150px;
  padding-top:5px;
}
.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
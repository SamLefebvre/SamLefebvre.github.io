---
title: Home
sidebar: false
search: false
next: false
---
<githubcorner />

<div class="flex-container">
  <div><router-link to="/en/portfolio/" class="home-link"><InfoCard title="Portfolio" logo="far fa-file-code fa-7x"/></router-link></div>
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github fa-7x"/></a></div>
  <div><router-link to="/en/interest/" class="home-link"><InfoCard title="Interest" logo="fas fa-fire-alt fa-7x"/></router-link></div>
  <div><a :href="$withBase('/cv_en.pdf')" target="_blank"><InfoCard title="CV" logo="far fa-file-pdf fa-7x" /></a></div>
</div>


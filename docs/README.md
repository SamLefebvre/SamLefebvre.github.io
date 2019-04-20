---
title: Acceuil
sidebar: false
search: false
next: false
---
<githubcorner />

<div class="flex-container">
  <div><a :href="$withBase('/cv_fr.pdf')" target="_blank"><InfoCard title="CV" logo="far fa-file-pdf" /></a></div>
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github"/></a></div>
  <div><router-link to="/portfolio/" class="home-link"><InfoCard title="Portfolio" logo="far fa-file-code"/></router-link></div>
  <div><router-link to="/interest/" class="home-link"><InfoCard title="Intérêts" logo="fas fa-fire-alt"/></router-link></div>
</div>


---
title: Accueil
sidebar: false
search: false
next: false
---
<githubcorner />


[Blog !](./blog/Readme.md)

<div class="flex-container">
  <div><RouterLink to="/portfolio/" class="home-link"><InfoCard title="Portfolio" logo="far fa-file-code"/></RouterLink></div>
  <div><a href="https://github.com/SamLefebvre" target="_blank"><InfoCard title="GitHub" logo="fab fa-github"/></a></div>
  <div><RouterLink to="/interest.html" class="home-link"><InfoCard title="Intérêts" logo="fas fa-fire-alt"/></RouterLink></div>
  <div><a :href="$withBase('/cv_fr.pdf')" target="_blank"><InfoCard title="CV" logo="far fa-file-pdf" /></a></div>
</div>
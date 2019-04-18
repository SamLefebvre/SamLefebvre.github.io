---
title: Acceuil
sidebar: false
search: false
next: false
---
<githubcorner />

<table class="cardIntro">
  <tr>
    <td><a
    :href="$withBase('/cv_fr.pdf')"
    target="_blank"><InfoCard title="CV" logo="far fa-file-pdf fa-7x" /></a></td>
    <td><a
    href="https://github.com/SamLefebvre"
    target="_blank"><InfoCard title="GitHub" logo="fab fa-github fa-7x"/></a></td>
  </tr>
  <tr>
    <td><router-link to="/portfolio/" class="home-link"><InfoCard title="Portfolio" logo="far fa-file-code fa-7x"/></router-link></td>
    <td><router-link to="/interest/" class="home-link"><InfoCard title="Intérêts" logo="fas fa-fire-alt fa-7x"/></router-link></td>
  </tr>
</table>



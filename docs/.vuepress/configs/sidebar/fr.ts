import type { SidebarConfig } from '@vuepress/theme-default'

export const fr: SidebarConfig = [
  {
    link:'/',
    text:'Accueil',
  },
  // SidebarItem Portfolio
  {
    text: 'Portfolio',
    link: '/portfolio',
    collapsible:true,
    children: ['/portfolio/unity.md', '/portfolio/blender.md'],
  },
  // SidebarItem Projets
  {
    text: 'Projets',
    link: '/projects',
    collapsible:true,
    children: ['/projects/labyrintheBlender.md'],
  },
  // SidebarItem Projets
  {
    text: 'Tutoriels',
    link: '/tutorials',
    collapsible:true,
    children: ['/tutorials/interfaceUnity.md'],
  },
  // Single page
  '/research.md',
  '/Contact.md',
]
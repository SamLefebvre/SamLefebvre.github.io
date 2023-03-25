import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = [
  {
    link:'/',
    text:'Home',
  },
  // SidebarItem Portfolio
  {
    text: 'Portfolio',
    link: '/en/portfolio/',
    collapsible:true,
    children: ['/en/portfolio/unity.md', '/en/portfolio/blender.md'],
  },
  // SidebarItem Projets
  {
    text: 'Projects',
    link: '/en/projects/',
    collapsible:true,
    children: ['/en/projects/labyrintheBlender.md'],
  },
  // SidebarItem Projets
  {
    text: 'Tutorials',
    link: '/en/tutorials/',
    collapsible:true,
    children: [
      '/en/tutorials/interfaceUnity.md',
      '/en/tutorials/fracturationBlenderUnity.md',
      '/en/tutorials/teachableMachine.md'],
  },
  // Single page
  '/en/art/',
  '/en/contact.md',
]
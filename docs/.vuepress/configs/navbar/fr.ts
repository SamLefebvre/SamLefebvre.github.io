import type { NavbarConfig } from '@vuepress/theme-default'

export const fr: NavbarConfig = [

  {
    text: 'Accueil',
    link: '/',
  },
  {
    text: 'Portfolio',
    children: [
      '/portfolio/unity.md',
      '/portfolio/blender.md',
    ],
  },
  {
    text: 'Unity',
    link: '/portfolio/unity/',
  },
  
  {
    text: 'Contact',
    link: '/contact.md',
  },
  
 
]
import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [

  {
    text: 'Home',
    link: '/en/',
  },
  {
    text: 'Portfolio',
    children: [
      '/en/portfolio/unity.md',
      '/en/portfolio/blender.md',
    ],
  },
  {
    text: 'Unity',
    link: '/en/portfolio/unity/',
  },
  
  {
    text: 'Contact',
    link: '/en/contact.md',
  },
  
 
]
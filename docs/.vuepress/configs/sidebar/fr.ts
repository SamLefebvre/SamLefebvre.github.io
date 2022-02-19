import type { SidebarConfig } from '@vuepress/theme-default'

export const fr: SidebarConfig = [
  {
    link:'/',
    text:'Home',
  },
  // SidebarItem Portfolio
  {
    text: 'Portfolio',
    link: '/portfolio',
    collapsible:true,
    children: ['/portfolio/unity.md', '/portfolio/blender.md'],
  },
  // SidebarItem Blog
  {
    text: 'Blog',
    link: '/blog',
    collapsible:true,
    children: ['/blog/article.md', '/blog/article2.md'],
  },
  // Single page
  '/interest.md',
]
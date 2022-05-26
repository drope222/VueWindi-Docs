 import { defineConfig } from 'vitepress'

export default defineConfig({  
  title: 'VueWindi',
  description: 'VueWindi + vitepress template',
  
  themeConfig: {
    //logo: '/logo.svg',
    repo: 'drope222/VueWindi',
    sidebar: {

      '/': getGuideSidebar(),
    }
  }, 
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Getting Started', link: '/docs/getting-started' },  
        { text: 'Usage', link: '/docs/usage' },       
        { text: 'Themes', link: '/docs/themes' },  
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Button', link: '/docs/button' },
        { text: 'Dropdown', link: '/docs/dropdown' },
        { text: 'Menu', link: '/docs/menu' },
        { text: 'Modal', link: '/docs/modal' },
        { text: 'Toggle', link: '/docs/toggle' },
        { text: 'Checkbox', link: '/docs/checkbox' },
        { text: 'Input', link: '/docs/input' },
   
      ]
    }
  ]
}
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'VitePress 多语言示例',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'My Website',
      description: 'VitePress Multi-language Example',
      link: '/en/',
    },
  },
  lang: "zh-CN",
  title: "8Bibo Server Wiki",
  description: "A VitePress Site",
  themeConfig: {  



   lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
// 搜索
    search: {
      provider: 'local',
      options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '退出',
                },
              },
            },
          },
        },

 // 上下页
   docFooter: {
      prev: '上一页',
      next: '下一页'
    },
// 页脚版权
    footer: {
      message: 'Thank you, the server provided by Minecraft.',
      copyright: 'Copyright © 2019-2025 8Bibo'
    },




    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '合集',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ],
      },
    ],

    sidebar: [
      {
        text: '总览',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/list/' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '开始使用',
        collapsed: true,
        items: [
          { text: '插件', link: '/guide/' },
          { text: '教程', link: '/guide/getting-started' },
          { text: '副本相关教程', link: '/guide/installation' },
        ]
      } 
    ],


   socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ]
  }
})
export interface LastUpdatedOptions {
  /**
   * @default 'Last updated'
   */
  text?: string

  /**
   * @default
   * { dateStyle: 'short',  timeStyle: 'short' }
   */
  formatOptions?: Intl.DateTimeFormatOptions & { forceLocale?: boolean }
}

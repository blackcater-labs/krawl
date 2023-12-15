import type { DefaultTheme } from 'vitepress/types'

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Why Krawl?', link: '/guide/why' },
    ],
    activeMatch: '^/guide/',
  },
  {
    text: 'Plugins',
    items: [
      {
        text: 'Overview',
        link: '/plugin/',
      },
      {
        items: [
          { text: 'Metaorg', link: '/plugin/metaorg' },
          {
            text: 'Others',
            link: '/plugin/community',
          },
        ],
      },
    ],
    activeMatch: '^/plugin/',
  },
]

export const NavZhCN: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    items: [
      { text: '为何选择 Krawl ?', link: '/zh-CN/guide/why' },
      { text: '快速开始', link: '/zh-CN/guide/' },
    ],
    activeMatch: '^/zh-CN/guide/',
  },
  {
    text: '插件',
    items: [
      {
        text: '概览',
        link: '/zh-CN/plugin/',
      },
    ],
    activeMatch: '^/zh-CN/plugin/',
  },
]

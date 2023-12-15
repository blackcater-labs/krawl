import type { DefaultTheme } from 'vitepress'

export const SidebarOne: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guides',
    items: [
      { text: 'Why Krawl?', link: '/guide/why' },
      { text: 'Getting Started', link: '/guide/' },
    ],
  },
  {
    text: 'Plugins',
    items: [
      { text: 'Getting Started', link: '/guide/' },
    ],
  },
]

export const SidebarOneZhCN: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: [
      { text: '为何选择 Krawl ?', link: '/zh-CN/guide/why' },
      { text: '快速开始', link: '/zh-CN/guide/' },
      { text: 'UI 模式', link: '/zh-CN/guide/ui-mode' },
    ],
  },
  {
    text: '进阶',
    items: [
      { text: 'abc' },
    ],
  },
  {
    text: '插件',
    items: [
      { text: '概览', link: '/zh-CN/plugin/' },
    ],
  },
]

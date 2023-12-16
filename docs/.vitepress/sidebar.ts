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
      { text: '配置文件', link: '/zh-CN/guide/config' },
      { text: '使用插件', link: '/zh-CN/guide/plugin' },
      { text: '使用代理', link: '/zh-CN/guide/proxy' },
      { text: 'UI 模式', link: '/zh-CN/guide/ui-mode' },
      { text: 'Docker 部署', link: '/zh-CN/guide/docker-deploy' },
    ],
  },
  {
    text: '案例',
    items: [
      { text: 'Hello, World', link: '/zh-CN/examples/hello_world' },
    ],
  },
  { text: '插件', link: '/zh-CN/plugin/' },
  {
    text: '参考',
    items: [
      { text: '@krawl/cli', link: '/zh-CN/guide/krawl-cli' },
      { text: '@krawl/utils', link: '/zh-CN/guide/krawl-utils' },
      { text: 'krawl.config,ts', link: '/zh-CN/guide/krawl-config-ts' },
    ],
  },
]

export const SidebarPluginZhCN: DefaultTheme.SidebarItem[] = [
  {
    text: '插件',
    items: [
      { text: '概览', link: '/zh-CN/plugin/' },
    ],
  },
  {
    text: '案例',
    items: [
      { text: 'Hello, World', link: '/zh-CN/examples/plugin-hello_world' },
    ],
  },
  {
    text: '社区插件',
    items: [
      { text: 'Metaorg', link: '/zh-CN/plugin/metaorg' },
      { text: '其他', link: '/zh-CN/plugin/community' },
    ],
  },
  {
    text: '参考',
    items: [
      { text: '插件 API', link: '/zh-CN/plugin/api' },
      { text: 'krawl.config.ts', link: '/zh-CN/config/krawl-config' },
    ],
  },
]

export const SidebarExampleZhCN: DefaultTheme.SidebarItem[] = [
  { text: '概览', link: '/zh-CN/examples/' },
  {
    text: '应用',
    items: [
      { text: 'Hello, World', link: '/zh-CN/examples/hello_world' },
    ],
  },
  {
    text: '插件',
    items: [
      { text: 'Hello, World', link: '/zh-CN/examples/plugin-hello_world' },
    ],
  },
]

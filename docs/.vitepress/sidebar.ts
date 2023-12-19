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
      {
        text: '配置模式',
        link: '/zh-CN/guide/config-mode',
        items: [
          { text: '使用插件', link: '/zh-CN/guide/plugin' },
          { text: '使用代理', link: '/zh-CN/guide/proxy' },
        ],
      },
      { text: '脚本模式', link: '/zh-CN/guide/script-mode' },
      { text: 'UI 模式', link: '/zh-CN/guide/ui-mode' },
    ],
  },
  {
    text: '进阶',
    items: [
      { text: '自定义缓存', link: '/zh-CN/guide/custom-cache' },
      { text: '自定义存储', link: '/zh-CN/guide/custom-storage' },
      { text: '自定义快照', link: '/zh-CN/guide/custom-snapshot' },
      { text: '分布式架构', link: '/zh-CN/guide/distributed-architecture' },
      { text: 'Docker 部署', link: '/zh-CN/guide/docker-deploy' },
      {
        text: '监控',
        items: [
          { text: 'Prometheus', link: '/zh-CN/guide/prometheus' },
          { text: 'Grafana', link: '/zh-CN/guide/grafana' },
          { text: 'Elastic Stack', link: '/zh-CN/guide/elastic-stack' },
          { text: 'Skywalking', link: '/zh-CN/guide/skywalking' },
          { text: 'Jaeger', link: '/zh-CN/guide/jaeger' },
        ],
      },
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
    text: '官方插件',
    items: [
      { text: 'Redis', link: '/zh-CN/plugin/krawl-redis' },
      { text: 'SQLite', link: '/zh-CN/plugin/krawl-sqlite' },
      { text: 'MySQL', link: '/zh-CN/plugin/krawl-mysql' },
      { text: 'PostgreSQL', link: '/zh-CN/plugin/krawl-postgresql' },
      { text: 'TiDB', link: '/zh-CN/plugin/krawl-tidb' },
      { text: 'MongoDB', link: '/zh-CN/plugin/krawl-mongodb' },
      { text: 'Elasticsearch', link: '/zh-CN/plugin/krawl-elasticsearch' },
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
      { text: 'Plugin API', link: '/zh-CN/plugin/api' },
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

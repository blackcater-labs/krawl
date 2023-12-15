import { defineConfig } from 'vitepress'
import { Nav, NavZhCN } from './nav'
import { SidebarOne, SidebarOneZhCN } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  lastUpdated: true,
  cleanUrls: true,

  title: 'Krawl',
  titleTemplate: 'Krawl - next generation web crawler',
  description: 'A node.js crawler framework. Brings you better use and develop experiences.',
  head: [],

  lang: 'en-US',
  locales: {
    'root': {
      label: 'English',
      lang: 'en',
      link: '/',
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',

      themeConfig: {
        nav: NavZhCN,
        sidebar: {
          '/zh-CN/guide/': SidebarOneZhCN,
          '/zh-CN/config/': SidebarOneZhCN,
          '/zh-CN/plugin/': SidebarOneZhCN,
        },
      },
    },
  },

  themeConfig: {
    nav: Nav,
    sidebar: {
      '/guide/': SidebarOne,
      '/config/': SidebarOne,
      '/plugin/': SidebarOne,
    },

    logo: '/logo.svg',

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/blackcater-labs/krawl/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Elon Tang',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/blackcater-labs/krawl' },
    ],
  },
})

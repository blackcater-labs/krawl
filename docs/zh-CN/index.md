---
layout: home

hero:
  image:
    src: /logo.svg
    alt: Krawl
  name: "Krawl"
  text: "下一代爬虫框架"
  tagline: 强大 · 易用 · 可扩展
  actions:
    - theme: brand
      text: 快速开始
      link: /zh-CN/guide/
    - theme: alt
      text: 为何选择 Krawl ?
      link: /zh-CN/guide/why
    - theme: alt
      text: 查看源码
      link: https://github.com/blackcater-labs/krawl
      target: _black

features:
  - icon: <span class="i-mdi:language-typescript"></span>
    title: TypeScript
    details: 使用 TypeScript 开发，带来更好的开发体验
  - icon: <span class="i-mdi:google-chrome"></span>
    title: Headless
    details: Headless 模式支持爬取任何网站，包括令人头疼的 CSR 站点
  - icon: <span class="i-mdi:package-variant-closed"></span>
    title: Plugin
    details: 支持插件系统，轻松创建更易用更强大的爬虫工具
  - icon: <span class="i-mdi:application-braces-outline"></span>
    title: UI Mode
    details: 支持 UI 模式，更方便的配置、管理和监控爬虫
  - icon: <span class="i-mdi:desktop-mac"></span>
    title: <span class="text-xs text-pink">WIP</span> Desktop App
    details: 开箱即用，无需安装任何依赖
  - icon: <span class="i-mdi:microsoft-visual-studio-code"></span>
    title: <span class="text-xs text-pink">WIP</span> VSCode Extension
    details: 无需离开 VSCode，即可创建、运行、调试爬虫
---

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembersZhCN } from '../.vitepress/contributors'
</script>

<div class="container mx-auto">
  <main class="main">
    <section flex flex-col items-center mt-10>
      <h2 id="meet-the-team" text="2xl" op70 font-bold p="t-10 b-2">
        认识我们团队
      </h2>
      <div p-10>
        <VPTeamMembers size="medium" :members="teamMembersZhCN" />
      </div>
    </section>
  </main>
</div>

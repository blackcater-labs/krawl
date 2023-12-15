---
layout: home

hero:
  image:
    src: /logo.svg
    alt: Krawl
  name: "Krawl"
  text: "Next Generation Crawler Framework"
  tagline: Powerful · Extensible · Easy to Use
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/blackcater-labs/krawl
      target: _black

features:
  - icon: <span class="i-mdi:language-typescript"></span>
    title: TypeScript
    details: Built in TypeScript to improve the development experience
  - icon: <span class="i-mdi:google-chrome"></span>
    title: Headless
    details: CSR website is not a headache, you can crawl any website you want
  - icon: <span class="i-mdi:package-variant-closed"></span>
    title: Plugin
    details: Extract logcis to plugins, support more powerful features
  - icon: <span class="i-mdi:application-braces-outline"></span>
    title: UI Mode
    details: Eazy to config and monitor your crawler with UI
  - icon: <span class="i-mdi:desktop-mac"></span>
    title: Desktop App <span class="text-xs text-pink">WIP</span>
    details: More convenient for general user to start crawling what they want
  - icon: <span class="i-mdi:microsoft-visual-studio-code"></span>
    title: VSCode Extension <span class="text-xs text-pink">WIP</span>
    details: More convenient for developer user to create own crawler
---

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembers } from './.vitepress/contributors'
</script>

<div class="container mx-auto">
  <main class="main">
    <section flex flex-col items-center mt-10>
      <h2 id="meet-the-team" text="2xl" op70 font-bold p="t-10 b-2">
        Meet Our Team
      </h2>
      <div p-10>
        <VPTeamMembers size="medium" :members="teamMembers" />
      </div>
    </section>
  </main>
</div>

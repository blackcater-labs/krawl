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
    details: You can crawl CSR website with headless mode
  - icon: <span class="i-carbon:data-class"></span>
    title: Plugin
    details: Extract logcis to plugins, making your crawler more powerful
  - icon: <span class="i-carbon:data-refinery"></span>
    title: Queue
    details: Saving your progress with queue, and you can resume it later
  - icon: <span class="i-carbon:file-storage"></span>
    title: Storage
    details: Save files, screenshots, and other data to disk
  - icon: <span class="i-carbon:cloud-monitoring"></span>
    title: UI Mode
    details: Eazy to config and monitor your crawler with UI
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

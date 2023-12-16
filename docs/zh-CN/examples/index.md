# 案例

## 应用

<script setup lang="ts">
import { examples, pluginExamples } from '../../.vitepress/content'
</script>

<div class="py-4" flex="~ wrap gap-2">
    <ContentExample
        v-for="item of examples"
        :key="item.name"
        :item="item"
    />
</div>

## 插件

<div class="py-4" flex="~ wrap gap-2">
    <ContentExample
        v-for="item of pluginExamples"
        :key="item.name"
        :item="item"
    />
</div>

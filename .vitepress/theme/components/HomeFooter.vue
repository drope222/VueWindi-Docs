
  
<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <footer v-if="frontmatter.footer" class="mx-auto container !max-w-screen-2xl px-6">
    <div class="px-6 pb-9 sm:(px-6 pb-18)">
      <p class="text-center text-sm text-gray-600 dark:text-gray-400">
        {{ frontmatter.footer }}
      </p>
    </div>
  </footer>
</template>
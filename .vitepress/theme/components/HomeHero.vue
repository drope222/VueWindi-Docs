<script setup lang="ts">
import { useData } from "vitepress";
import { WButton } from "vue-windi";
import { IconLogo } from "./icons";
const { frontmatter } = useData();
const data = frontmatter.value;


</script>
<template>
  <div class="">
    
    <IconLogo v-if="!data.heroImage" class="hidden mx-auto h-20" color="fill-primary-200"  />
    <img
      v-else
      :src="data.heroImage"
      class="mx-auto mb-4 h-20"
    />
    <div class=" max-w-2xl ">
      <h1
        v-if="data.heroText"
        class=" antialiased text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-300 font-extrabold text-4xl leading-8 sm:text-5xl lg:text-6xl tracking-tight   sm:leading-16 "
      >
        {{ data.heroText }}
      </h1>
      <p
        v-if="data.tagline"
        class="m-0 mt-10 text-lg opacity-75 leading-6 font-medium  sm:text-2xl"
      >
        {{ data.tagline }}
      </p>
      <div class="mt-10 flex space-x-4 ">
        <WButton
          v-if="data.actionLink"
          size="md"
          tag="a"
          :href="data.actionLink"
          >{{ data.actionText }}</WButton
        >
        <WButton
          v-if="data.altActionLink"
          variant="outline"
          size="md"
          tag="a"
          :href="data.altActionLink"
          >{{ data.altActionText }}</WButton
        >
      </div>
    </div>
  </div>
</template>
<style>
.home {
  height: calc(100vh - 73px);
}
</style>

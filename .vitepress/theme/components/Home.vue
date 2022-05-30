<script setup lang="ts">
import HomeNews from "./HomeNews.vue";
import HomeHero from "./HomeHero.vue";
import HomeFeatures from "./HomeFeatures.vue";
import HomeFooter from "./HomeFooter.vue";
import HomeExample from "./HomeExample.vue";
</script>
<template>
  <div class="pb-12">
    <div class="flex  md:px-6">
      <div class="py-10 md:(py-16 px-10) lg:(px-33)">
        <HomeHero />
       <HomeNews /> 
        <HomeExample />
      </div>
    </div>
    <HomeFeatures />
  </div>
  <HomeFooter />
</template>

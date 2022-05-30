<script setup lang="ts">
import { WButton, WToggle, WCheckbox } from "vue-windi";
import { IconClose } from "./icons";
import { useDark } from "../composables/dark";

const { isDark } = useDark()

const themes = [
    'theme-blue',
    'theme-teal',
    'theme-rose',
    'theme-violet',
    'theme-orange'
]
</script>
<template>
<div class="mt-14">
    
  <div class="flex flex-wrap mt-10 gap-4">
    <div v-for="theme in themes" :class="[theme, {'dark': isDark}]" 
    class="shadow-sm border rounded-lg flex flex-wrap 
     gap-2
      (w-40 px-12 py-9  )
    md:(w-48  px-6 py-7)">
      <div class="flex items-center w-full justify-between">
        <WButton circle size="xs"> <IconClose class="h-5" /> </WButton>
        <WToggle checked />
        <WCheckbox checked />
      </div>
      <WButton size="sm" class="w-full"> Primary </WButton>
      <WButton size="sm" variant="transparent" class="w-full"> Transparent </WButton>
      <WButton size="sm" variant="outline" class="w-full"> Outline </WButton>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { WMenu, WButton } from "vue-windi";
</script>
<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WMenu horizontal rounded class="w-auto">
      <WButton menu-item>Item 1</WButton>
      <WButton menu-item>Item 2</WButton>
      <WButton menu-item>Item 3</WButton>
    </WMenu>
    <!-- #endregion snippet -->
  </div>
</template>

<script setup lang="ts">
import { WMenu, WButton } from "vue-windi";
</script>
<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WMenu padding>
      <span class="menu-title">Category</span>
      <WButton menu-item>Item 1</WButton>
      <WButton menu-item>Item 2</WButton>
      <span class="menu-title">Other Category</span>
      <WButton menu-item>Item 3</WButton>
      <WButton menu-item>Item 4</WButton>
    </WMenu>
    <!-- #endregion snippet -->
  </div>
</template>

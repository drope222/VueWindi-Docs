<script setup lang="ts">
import { WMenu, WButton } from "vue-windi";
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WMenu compact="lg" rounded padding>
      <WButton menu-item>Responsive 1</WButton>
      <WButton menu-item>Responsive 2</WButton>
      <WButton menu-item>Responsive 3</WButton>
    </WMenu>
    <!-- #endregion snippet -->
  </div>
</template>
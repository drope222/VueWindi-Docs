<script setup lang="ts">
import { WMenu, WButton } from "vue-windi";
</script>
<template>
  <div class="flex flex-wrap items-center gap-3">
    <!-- #region snippet -->
    <WMenu rounded padding>
      <WButton menu-item class="disabled">Disabled 1</WButton>
      <WButton menu-item class="disabled">Disabled 2</WButton>
      <WButton menu-item class="disabled">Disabled 3</WButton>
    </WMenu>
    <!-- #endregion snippet -->
  </div>
</template>

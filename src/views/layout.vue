<template>
  <div :class="$style.layout">
    <Header :class="$style.header" />
    <RouterView :class="$style.routerView" />
    <Footer />
  </div>
</template>
<script setup lang="ts">

import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<style lang="scss" module>
.header {
  width: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  overflow: hidden;
}

.routerView {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .routerView {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .routerView {
    padding: 5px;
  }
}

</style>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderCommon  from './components/HeaderCommon.vue'
import FooterCommon from './components/FooterCommon.vue'
</script>

<template>
  <HeaderCommon />
  <Transition name="slide-fade">
    <RouterView/>
  </Transition>
  <FooterCommon />
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

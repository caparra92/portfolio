<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Loader from '@/components/Loader.vue';
import HeaderCommon  from './components/HeaderCommon.vue'
import FooterCommon from './components/FooterCommon.vue'


const pageIsLoaded = ref(false);

onMounted(() => {
    pageIsLoaded.value = true;
});
</script>

<template>
  <HeaderCommon />
  <Transition name="slide-fade">
    <RouterView v-if="pageIsLoaded"/>
    <Loader v-else></Loader>
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

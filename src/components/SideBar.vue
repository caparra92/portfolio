<template>
  <div class="u-container">
    
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue';

const showSidebar = ref(true);

</script>
<style scoped>
.fade-enter-active {
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.fade-leave-active {
  -webkit-transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  -o-transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
{
  -webkit-transform: translateX(10px);
  -ms-transform: translateX(10px);
  transform: translateX(10px);
  opacity: 0;
}

.u-menu {
  text-align: left;
  height: 35px;
  position: absolute;
}

#toggle {
  outline: none;
  top: 30px;
  left: 30px;
  font-weight: 800;
  width: 35px;
  font-size: 3rem;
  color: var(--color-btn-hover);
  cursor: pointer;
  border: none;
  background: none;
  -webkit-text-stroke: 1px var(--color-text);
  -moz-text-stroke: 1px var(--color-text);
  transition: all 0.5s;
  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
}

#toggle:hover {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -webkit-text-stroke: 1px var(--color-text);
  -moz-text-stroke: 1px var(--color-text);
}

#closeBtn {
  outline: none;
  top: 10px;
  left: -35px;
  font-size: 4rem;
  color: var(--color-text);
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
  z-index: 1;
  transition: all 0.35s;
  -webkit-transition: all 0.25s;
  -moz-transition: all 0.25s;
}

#closeBtn:hover {
  color: var(--color-btn-hover);
  -webkit-text-stroke: 2px var(--color-text);
  -moz-text-stroke: 2px var(--color-text);
}
</style>
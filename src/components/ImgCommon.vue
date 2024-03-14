<template>
    <img :src="srcImg" :alt="altImg">
</template>
<script setup lang="ts">
defineProps<{
        altImg?: string,
        srcImg?: string
    }>()
</script>
<style scoped>
img {
    width: 100%;
}
</style>
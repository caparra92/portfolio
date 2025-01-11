<template>
    <div class="u-presentation">
        <Bubbles></Bubbles>
        <div class="u-title"><h1>Full Stack Web Developer</h1></div>
        <h2>Skills</h2>
        <!-- <div class="u-images-bg"></div> -->
        <div class="u-images" :class="{ 'u-social-dark': dark.darkTrigger }">
            <img src="@/assets/img/html5.svg" alt="html logo">
            <img src="@/assets/img/css3.svg" alt="css logo">
            <img src="@/assets/img/js.svg" alt="js logo">
            <img src="@/assets/img/vue.svg" alt="vue.js logo">
            <img src="@/assets/img/ts.svg" alt="typescript logo">
            <img src="@/assets/img/node.svg" alt="node.js logo">
            <img src="@/assets/img/python.svg" alt="python logo">
            <img src="@/assets/img/java.svg" alt="java logo">
            <img src="@/assets/img/c-sharp.svg" alt="c sharp logo">
        </div>
    </div>
</template>
<script setup lang="ts">
import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';
import Bubbles from '@/components/Bubbles.vue';

const dark = useDarkThemeTrigger();
</script>
<style scoped>

.u-presentation {
    display: grid;
    /* position: relative; */
    grid-template-rows: 2fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 99;
}

.u-presentation .u-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.u-presentation h1 {
    font-weight: bold;
    font-size: 3rem;
    margin-top: 3rem;
    /* mix-blend-mode: multiply; */
    position: relative;
    /* background: var(--color-background); */
}

.u-presentation h1:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background: linear-gradient(to right, var(--color-link-active), var(--color-border)); */
    background: linear-gradient(-45deg, var(--color-link-active) 50%, var(--color-border) 50%);
    filter: blur(44px); 
    mix-blend-mode: screen; 
}

.u-images {
    filter: invert(var(--filter-invert));
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.u-images img {
    width: 100%;
    max-width: 100px;
    height: auto;
    padding: 10px;
}

.u-social-dark {
    filter: invert(1);
}

@media screen and (max-width: 768px) {

    .u-presentation {
        grid-template-rows: 1fr 1fr 1fr;
    }
    .u-presentation h1 {
        font-size: 2rem;
    }

    .u-images img {
        width: 100%;
        max-width: 80px;
        height: auto;
        padding: 10px;
    }
}
</style>
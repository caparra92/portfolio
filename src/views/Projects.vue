<template>
    <div class="u-projects">
        <div class="u-title">
            <h1>projects</h1>
        </div>
        <div class="u-card-projects">
            <CardCommon
                action="demo" 
                cardTitle="Portfolio" 
                description="Single Page Application portfolio made with Vue.js and Typescript"
                :srcImg="portfolioImg"
                altImg="Portfolio frame" 
                :imgTechUrl="[
                            vueImg,
                            tsImg,
                            html5Img,
                            css3Img
                            ]" 
                urlProject="https://parr0124-landing001.netlify.app"
            />
            <CardCommon
                action="demo" 
                cardTitle="Landing Template" 
                description="Responsive layout for mobile, tablet and desktop devices"
                :srcImg="pcLandingImg"
                altImg="Landing page"
                :imgTechUrl="[html5Img,css3Img]"
                urlProject="https://parr0124-landing001.netlify.app"
            />
            <CardCommon
                action="code" 
                cardTitle="TO DO Terminal app" 
                description="TO DO command line application made with node.js and yargs"
                :srcImg="yargsImg" 
                altImg="TO DO command line"
                :imgTechUrl="[jsImg,nodeImg]"
                urlProject="https://github.com/caparra92/tareas-console"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

import CardCommon from '@/components/CardCommon.vue';

import { 
        css3Img, 
        html5Img, 
        jsImg, 
        nodeImg, 
        pcLandingImg, 
        portfolioImg, 
        tsImg, 
        vueImg, 
        yargsImg 
    } from '@/util/assetHandling';

</script>

<style scoped>
.u-projects {
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.u-title h1 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
}

.u-card-projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
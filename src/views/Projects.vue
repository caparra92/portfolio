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
                srcImg="src/assets/img/portfolio.png"
                altImg="Portfolio frame" 
                :imgTechUrl="[
                            'src/assets/img/vue.svg',
                            'src/assets/img/ts.svg',
                            'src/assets/img/html5.svg',
                            'src/assets/img/css3.svg'
                            ]" 
                urlProject="https://parr0124-landing001.netlify.app"
            />
            <CardCommon
                action="demo" 
                cardTitle="Landing Template" 
                description="Responsive layout for mobile, tablet and desktop devices"
                srcImg="src\assets\img\pc-landing.png" 
                altImg="Landing page"
                :imgTechUrl="['src/assets/img/html5.svg','src/assets/img/css3.svg']"
                urlProject="https://parr0124-landing001.netlify.app"
            />
            <CardCommon
                action="code" 
                cardTitle="TO DO Terminal app" 
                description="TO DO command line application made with node.js and yargs"
                srcImg="src\assets\img\yargs.png" 
                altImg="TO DO command line"
                :imgTechUrl="['src/assets/img/js.svg','src/assets/img/node.svg']"
                urlProject="https://github.com/caparra92/tareas-console"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

import CardCommon from '@/components/CardCommon.vue';

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
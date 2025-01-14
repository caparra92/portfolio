<template>
    <div class="u-projects">
        <div class="u-title">
            <h1>projects</h1>
        </div>
        
        <!-- <Loader v-else></Loader> -->
        <Transition name="slide-fade">

        <Loader v-if="!pageIsLoaded"></Loader>
        <div class="u-card-projects">
            <CardCommon
                :action="'code'"
                cardTitle="Statistics App" 
                description="Mobile app made with vue + ionic to save statistics of different activities and show graph of their progress (Ex Show weekly progress in push ups through a pie chart)."
                :srcImg="followingImg" 
                altImg="Statistics mobile app"
                :imgTechUrl="[ionicImg,vueImg, nodeImg]"
                :urlProject="'https://github.com/caparra92/following-app-front'"
            />
            <CardCommon
                :action="'code'" 
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
                :urlProject="'https://github.com/caparra92/portfolio'"
            />
            <CardCommon
                :action="['demo','code']" 
                cardTitle="Landing Template" 
                description="Responsive layout for mobile, tablet and desktop devices"
                :srcImg="landingImg"
                altImg="Landing page"
                :imgTechUrl="[html5Img,css3Img]"
                :urlProject="['https://parr0124-landing001.netlify.app','https://parr0124-landing001.netlify.app']"
            />
        </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import CardCommon from '@/components/CardCommon.vue';
import Loader from '@/components/Loader.vue';

import { useRoute } from 'vue-router';

import { 
        css3Img, 
        html5Img, 
        nodeImg,
        landingImg,  
        portfolioImg, 
        tsImg, 
        vueImg, 
        ionicImg, 
        followingImg
    } from '@/util/assetHandling';
    
const pageIsLoaded = ref(false);

const route = useRoute();

onMounted(() => {
    pageIsLoaded.value = true;
});

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
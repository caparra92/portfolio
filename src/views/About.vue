<template>
    <Loader v-if="!pageIsLoaded"></Loader>
    <div class="u-about" v-else>
        <div class="u-title">
            <h1>about</h1>
        </div>
        <div class="u-photo">
            <img src="@/assets/img/profile.jpg" alt="profile-photo">
        </div>
        <div class="u-description">
            <p>Camilo Parra, Web Developer</p>

            <p class="u-description-detail">I was born in 1992 in Pasto city of Colombia. I obtained my degree in computer science and education
                in my home country and, after finishing my degree I began working in IT. Now Currently, I'm based in Ottawa, Canada,
                taking web development studies and seeking for continuing my career at the same time.
                I love sports. I practice capoeira and jiu-jitsu few years ago and I really enjoy teaching
                and sharing all I have learnt with the tech community, you can follow me or check my blog posts out on medium.</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';
import Loader from '@/components/Loader.vue';

onMounted(() => {
    pageIsLoaded.value = true;
});

const dark = useDarkThemeTrigger();
const pageIsLoaded = ref(false);

</script>
<style scoped>
.u-about {
    display: grid;
    grid-template-rows: 1fr;
    margin-top: 2rem;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.u-title h1 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
}

.u-photo {
    display: flex;
    justify-content: center;
}

.u-photo img {
    width: 250px;
    border-radius: 50%;
}

.u-description {
    text-align: center;
}
.u-description p:first-of-type {
    font-size: 24px;
    margin-bottom: 1rem;
}

.u-description .u-description-detail {
    text-align: center;
    width: 80%;
    margin: 2rem auto;
}

@media screen and (max-width: 768px) {
    .u-description .u-description-detail {
        font-size: 1rem;
    }
}
</style>
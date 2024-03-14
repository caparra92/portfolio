<template>
    <div class="u-about">
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
                I’m very passionate with sports. I practice capoeira and jiu-jitsu few years ago and I really enjoy teaching
                and sharing all I have learnt with the tech community, you can follow me or check my blog posts out on medium.</p>
        </div>
        <div class="u-social" :class="{ 'u-social-dark': dark.darkTrigger }">
            <a href="https://github.com/caparra92" target="_blank">
                <img src="@/assets/img/github.svg" alt="github logo">
            </a>
            <a href="https://linkedin.com/in/parra-camilo" target="_blank">
                <img src="@/assets/img/linkedin.svg" alt="linkedin logo">
            </a>
            <a href="https://www.instagram.com/camilo_parra_galo" target="_blank">
                <img src="@/assets/img/instagram.svg" alt="instagram logo">
            </a>
            <a href="https://medium.com/@caparra92" target="_blank">
                <img src="@/assets/img/medium.svg" alt="medium logo">
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';

const dark = useDarkThemeTrigger();

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

.u-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.u-social a {
    text-decoration: none;
    outline: none;
    transition: all .3s ease;
}

.u-social a:hover {
    background-color: transparent;
    transform: scale(1.1);
}

.u-social img {
    width: 50px;
}

.u-social-dark {
    filter: invert(1);
}

@media screen and (max-width: 768px) {
    .u-description .u-description-detail {
        font-size: 1rem;
    }
}
</style>
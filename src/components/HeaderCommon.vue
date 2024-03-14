<template>
    <header>
        <div class="u-menu">
            <button id="toggle" ref="menuTrigger" @click="showMenu" v-if="showHamburguerMenu">|||</button>
            <button id="closeBtn" v-if="!showHamburguerMenu" @click="showMenu">&times;</button>
        </div>
        <div class="u-wrapper">
            <div class="u-logo">
                <span>Camilo Parra</span>
            </div>
            <transition name="slide-fade">
                <div class="u-slide-menu" ref="slideMenu" v-show="showSlideMenu">
                    <nav>
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/me">Me</RouterLink>
                        <RouterLink to="/projects">Projects</RouterLink>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </nav>
                    <div class="u-toggle">
                        <label class="u-switch">
                            <input type="checkbox" @click="changeTheme" v-model="checked">
                            <span class="u-slider"></span>
                        </label>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';

const showHamburguerMenu = ref(true);
const showSlideMenu = ref(false);
const menuTrigger = ref();
const slideMenu = ref();

const root = ref(document.documentElement);
const checked = ref(null);
let dark = useDarkThemeTrigger();

const showMenu = () => {
    showSlideMenu.value = !showSlideMenu.value;
    showHamburguerMenu.value = !showHamburguerMenu.value;
}

const changeTheme = () => {
    dark.changeValue();
    if (!dark.darkTrigger) {
        root.value.style.setProperty('--color-background', '#fff');
        root.value.style.setProperty('--color-input', '#f2f2f2');
        root.value.style.setProperty('--color-text', '#2c3e50');
        root.value.style.setProperty('--color-link-hover', '#00bd7e33');
        root.value.style.setProperty('--color-border', '#3c3c3c1f');
        root.value.style.setProperty('--color-link-active', '#00bd7e');
    } else {
        root.value.style.setProperty('--color-background', '#282828');
        root.value.style.setProperty('--color-input', '#545454a6');
        root.value.style.setProperty('--color-text', '#fff');
        root.value.style.setProperty('--color-link-hover', '#ebebeba3');
        root.value.style.setProperty('--color-border', '#545454a6');
        root.value.style.setProperty('--color-link-active', '#ebebeba3');
    }
};

</script>

<style scoped>
/** === Hamburguer menu === */

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

.fade-enter,
.fade-leave-to {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
    opacity: 0;
}

.u-menu {
    display: block;
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

/** === */

/** === Slider Menu === */

.u-slide-menu {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

/** === */
.u-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin-top: 2rem;
}

.u-logo {
    display: flex;
    align-items: center;
    font-size: 28px;
}

nav {
    display: flex;
    justify-content: center;
    /* width: 100%; */
    font-size: 1rem;
    text-align: center;
    margin: auto;
}

nav a.router-link-exact-active {
    color: var(--color-link-active);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

.u-toggle {
    display: flex;
    justify-content: center;
}

.u-switch {
    position: relative;
    margin: 10px;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.u-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.u-slider {
    position: absolute;
    cursor: pointer;
    border-radius: 34px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.u-slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.u-slider {
    background-color: var(--color-btn-hover);
}

input:focus+.u-slider {
    box-shadow: 0 0 1px var(--color-btn-hover);
}

input:checked+.u-slider:before {
    -webkit-transform: translateX(26px);
    -moz-transform: translateX(26px);
    transform: translateX(26px);
}

.u-label-switch {
    color: var(--content-color);
}

@media screen and (max-width: 768px) {

    .u-show-in {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .u-logo {
        margin-top: 2rem;
        font-size: 1rem;
    }

    .u-slide-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    nav {
        flex-direction: column;
        width: 100%;
    }

    nav a {
        border-left: none;
        border-bottom: 1px solid var(--color-border);
        font-size: 1rem;
        padding: 10px;
    }

    .u-wrapper {
        margin: 0;
        display: flex;
        flex-direction: column;
    }
}

@media (min-width: 768px) and (max-width: 900px) {
    
    .u-logo { visibility: hidden;}

    nav {
        margin: auto 0 auto auto;
    }
}

@media (min-width: 900px) {

    .u-logo { visibility: hidden;}

    nav {
        text-align: left;
        margin: auto 0 auto auto;
        font-size: 1rem;

        padding: 1rem 0;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

}
</style>
<template>
    <div class="u-card-container">
        <div class="u-card-image">
            <ImgCommon :srcImg="srcImg" altImg="Landing page template"/>
        </div>
        <div class="u-card-body">
            <div class="u-card-title">
                <h3>{{ cardTitle }}</h3>
            </div>
            <div class="u-card-description">
                <p>{{ description }}</p>
            </div>
            <div class="u-card-tech" :class="{ 'u-social-dark': dark.darkTrigger }">
                <template v-for="(img, index) in imgTechUrl">
                    <ImgCommon :srcImg="img" :altImg="alt"/>
                </template>
            </div>
                <div class="u-card-action" v-if="Array.isArray(action)">
                    <a v-for="(act, index) in action" :key="index" :href="urlProject[index]" class="u-btn-action" target="_blank">{{act}}</a>
                </div>
            <div v-else class="u-card-action">
                <a :href="urlProject.toString()" class="u-btn-action" target="_blank">{{action}}</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ImgCommon from './ImgCommon.vue';

import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';

const dark = useDarkThemeTrigger();

    defineProps<{
        cardTitle?: string,
        description?: string,
        srcImg?: string,
        alt?: string,
        imgTechUrl?: Array<string>,
        urlProject: Array<string> | string,
        action?: Array<string> | string
    }>()

</script>
<style scoped>
.u-card-container {
    margin: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    border: 1px solid var(--color-border);
    border-radius: 7px;
}

.u-card-image {
    border-right: 1px solid var(--color-border);
    background-color: var(--color-btn-hover);
    padding: 15px;
}

.u-card-image img {
    filter: drop-shadow(0 0 0.15rem var(--vt-c-white));
}

.u-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin-left: 10px;
}

.u-card-title {
    text-align: center;
}

.u-card-title h3 {
    font-size: 1.5rem;
}

.u-card-description {
    text-align: justify;
    padding-left: 10px;
}

.u-card-tech {
    display: flex;
    gap: 1rem;
    padding: 0 10px;
}

.u-card-tech img {
    width: 30px;
}

.u-card-action {
    padding: 10px;
    display: flex;
    gap: 1rem;
}

.u-btn-action {
    display: inline-block;
    background-color: var(--color-link-active);
    color: var(--color-background);
    text-decoration: none;
    height: 44px;
    width: 100px;
    text-align: center;
    line-height: 2.4;
    border-radius: 7px;
    outline: none;
    cursor: pointer;
    transition: all .3s ease;
}

.u-btn-action:hover {
    background-color: var(--color-btn-hover);
    color: var(--color-background-soft);
    transform: scale(1.1);
}

.u-social-dark {
    filter: invert(1);
}

@media screen and (max-width: 768px) {
    .u-card-container {
        grid-template-columns: 1fr;
        width: 100%;
    }

    .u-card-image {
        border-right: none;
        border-bottom: 1px solid var(--color-border);
    }

    .u-card-body {
        gap: 1rem;
        padding: 10px;
        margin-left: 0;
    }

    .u-card-description {
        padding: 0 10px;
    }

    .u-card-tech {
        display: flex;
        gap: 1rem;
        padding: 0 10px;
    }

    .u-btn-action {
        width: 100%;
    }

    .u-btn-action:hover {
        transform: scale(1);
    }
}

</style>
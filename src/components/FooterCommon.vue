<template>
    <div class="u-footer">
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
        <div class="u-sign">
            <span>+1 343 322 1022</span><span class="u-dash">-</span><span>caparra92@gmail.com</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useDarkThemeTrigger } from '@/stores/darkThemeTrigger';

const dark = useDarkThemeTrigger();
</script>
<style scoped>
.u-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    margin-top: 20px;
}

.u-sign {
    display: flex;
    gap: .5rem;
    justify-content: center;
}

.u-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.u-social a {
    filter: invert(var(--filter-invert));
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
    .u-dash {
        display: none;
    }

    .u-sign {
        flex-direction: column;
        align-items: center;
    }
}
</style>
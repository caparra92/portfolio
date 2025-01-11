<template>
    <Transition class="fade">
        <div class="u-loader-container">
            <div class="u-loader">
                <span class="u-square"></span>
                <span class="u-square"></span>
                <span class="u-square"></span>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
</script>
<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.u-loader-container {
    /* position: absolute;
    margin: auto; 
    padding: 0; */
    /* left: 50%; */
    /* width: 80%; */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.u-loader {
    width: var(--square-container-width);
    height: var(--square-container-height);
    margin: auto;
}

.u-square {
    display: inline-block;
    width: var(--square-size);
    height: var(--square-size);
    margin: var(--square-margin);
    background: var(--color-link-active);
    border-radius: var(--square-radius);
}

.u-loader span:nth-child(1) {
    animation: loading 1.5s linear infinite;
}

.u-loader span:nth-child(3) {
    animation: loading2 1.5s linear infinite;
}

.u-loader span:nth-child(2) {
    animation: loading3 1.5s linear infinite;
}

@keyframes loading {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(0, var(--square-gap));
    }
    50% {
        transform: translate(var(--square-gap), var(--square-gap));
    }
    75% {
        transform: translate(var(--square-gap), 0);
    }
    100% {
        transform: translate(0, 0);
    }
}

@keyframes loading2 {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(var(--square-gap), 0);
    }
    50% {
        transform: translate(var(--square-gap), calc(-1 * var(--square-gap)));
    }
    75% {
        transform: translate(0, calc(-1 * var(--square-gap)));
    }
    100% {
        transform: translate(0, 0);
    }
}

@keyframes loading3 {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(calc(-1 * var(--square-gap)), 0);
    }
    50% {
        transform: translate(calc(-1 * var(--square-gap)), var(--square-gap));
    }
    75% {
        transform: translate(0, var(--square-gap));
    }
    100% {
        transform: translate(0, 0);
    }
}

</style>
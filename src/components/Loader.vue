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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.u-loader {
    width: 100px;
    height: 100px;
    margin: auto;
}

.u-square {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 4px;
    background: var(--color-link-active);
    border-radius: 5px;
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
        transform: translate(0, 53px);
    }

    50% {
        transform: translate(53px, 53px);
    }

    75% {
        transform: translate(53px, 0);
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
        transform: translate(53px, 0);
    }

    50% {
        transform: translate(53px, -53px);
    }

    75% {
        transform: translate(0, -53px);
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
        transform: translate(-53px, 0);
    }

    50% {
        transform: translate(-53px, 53px);
    }

    75% {
        transform: translate(0, 53px);
    }

    100% {
        transform: translate(0, 0);
    }
}
</style>
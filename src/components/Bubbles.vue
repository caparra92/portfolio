<template>
    <ul class="u-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>
<style scoped>
.u-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.u-bubbles li {
    list-style: none;
    position: absolute;
    display: block;
    width: 4rem;
    height: 4rem;
    background: linear-gradient(-45deg, var(--color-link-active), var(--color-border));
    bottom: 50px;
    animation: bubbleRotation 25s linear infinite;
}

.u-bubbles li:nth-child(1) {
    left: 25%;
    height: 1.5rem;
    width: 1.5rem;
    animation-delay: 1s;
}

.u-bubbles li:nth-child(2) {
    left: 55%;
    height: 2.5rem;
    width: 2.5rem;
    animation-delay: 0s;
}

.u-bubbles li:nth-child(3) {
    left: 85%;
    height: 4rem;
    width: 4rem;
    animation-delay: 0s;
    animation-duration: 12s;
}

.u-bubbles li:nth-child(4) {
    left: 75%;
    height: 5.5rem;
    width: 5.5rem;
    animation-delay: 1.5s;
    animation-duration: 15s;
}

.u-bubbles li:nth-child(5) {
    left: 25%;
    height: 2rem;
    width: 2rem;
    animation-delay: 0s;
    animation-duration: 20s;
}

.u-bubbles li:nth-child(6) {
    left: 10%;
    height: 7.5rem;
    width: 7.5rem;
    animation-delay: 0s;
    animation-duration: 17s;
}

.u-bubbles li:nth-child(7) {
    left: 70%;
    height: 1rem;
    width: 1rem;
    animation-delay: 4s;
}

.u-bubbles li:nth-child(8) {
    left: 35%;
    height: 3.5rem;
    width: 3.5rem;
    animation-delay: 4.5s;
}

.u-bubbles li:nth-child(9) {
    left: 15%;
    height: .5rem;
    width: .5rem;
    animation-delay: 0s;
    animation-duration: 18s;
}

.u-bubbles li:nth-child(10) {
    left: 45%;
    height: 8.5rem;
    width: 8.5rem;
    animation-delay: 0s;
}

@keyframes bubbleRotation {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
        border-radius: 0;
    }

    50% {
        opacity: 1;
    }
    
    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
</style>
<template>
    <div class="footer">
        <span>+1 343 322 1022 <span>-</span> caparra92@gmail.com</span>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.footer {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.footer span {
    text-align: center;
}

@media screen and (max-width: 768px) {
    .footer span span {
        display: none;
    }
}
</style>
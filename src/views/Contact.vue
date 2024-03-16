<template>
    <div class="u-contact" v-if="pageIsLoaded">
        <div class="u-title">
            <h1>contact</h1>
        </div>
        <div class="u-container">
            <div class="u-form-container">
                <form @submit.prevent="sendEmailMessage">
                    <InputCommon type="text" label="Name" v-model="form.name"></InputCommon>
                    <InputCommon type="email" label="Email" v-model="form.email"></InputCommon>
                    <TextAreaCommon label="Message" col="23" row="10" v-model="form.message"></TextAreaCommon>
                    <div class="u-btn-container">
                        <button class="u-btn-send-message">Send</button>
                    </div>
                </form>
            </div>
            <div class="u-map-container">
                <Map></Map>
            </div>
        </div>
    </div>
    <Loader v-else></Loader>
</template>
<script setup lang="ts">

import { onMounted, ref } from 'vue';

import InputCommon from '@/components/InputCommon.vue';
import TextAreaCommon from '@/components/TextAreaCommon.vue';
import Loader from '@/components/Loader.vue';
import Map from '@/components/Map.vue';
import { useSendEmail } from '@/stores/sendEmail';

const pageIsLoaded = ref(false);
const sendEmail = useSendEmail();
const form = ref({
      name: '',
      email: '',
      message: ''
    });

onMounted(() => {
    pageIsLoaded.value = true;
});

const sendEmailMessage = async() => {
    try {
        
        if(form.value.name === ''  || form.value.email === '' || form.value.message === '') {
          console.log(`name, description and category are required`);
          return;
        }
        console.log(form.value)
        const data = await sendEmail.sendEmail(form.value.name, form.value.email, form.value.message);
        console.log(data)
        clearForm();
      } catch (error) {
        console.log(error);
      }
      
}
 
const clearForm = () => {
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
}

</script>
<style scoped>

.u-contact {
    margin-top: 2rem;
}

.u-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.u-title {
    margin-bottom: 2rem;
}

.u-title h1 {
    text-align: center;
    text-transform: uppercase;
}

.u-btn-send-message {
    display: inline-block;
    background-color: var(--color-link-active);
    color: var(--color-background);
    text-decoration: none;
    height: 44px;
    width: 100px;
    text-align: center;
    line-height: 2.4;
    border-radius: 7px;
    margin: 1rem;
    outline: none;
    cursor: pointer;
    transition: all .3s ease;
}

.u-btn-container {
    width: 100%;
    padding: 0;
    margin: 0;
}

.u-btn-send-message:hover {
    background-color: var(--color-btn-hover);
    color: var(--color-background-soft);
    transform: scale(1.1);
}

.u-map-container {
    padding: 8px;
}

@media screen and (max-width: 768px) {
    .u-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .u-container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .u-map-container {
        padding: 8px 0;
    }

    .u-btn-send-message {
        margin: 1rem 0;
    }
}

@media (min-width: 768px) and (max-width: 900px) {
    .u-container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 2rem;
    }
}
</style>
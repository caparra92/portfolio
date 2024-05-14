<template>
    <div class="u-contact">
        <div class="u-title">
            <h1>contact</h1>
        </div>
        <p>Feel free to send me an email or use the following form to send a message. All fields are mandatory. Meanwhile, you can also check the attached map where I have marked my last work experience locations (Canada, Colombia, Brazil).</p>
        <div class="u-container">
            <div class="u-form-container" v-if="!validationIsPending">
                <form @submit.prevent="sendEmailMessage">
                    <InputCommon type="text" label="Name" v-model="form.name" :validation="validationMsg"></InputCommon>
                    <InputCommon type="email" label="Email" v-model="form.email" :validation="validationMsg"></InputCommon>
                    <TextAreaCommon label="Message" col="23" row="10" v-model="form.message" :validation="validationMsg"></TextAreaCommon>
                    <div class="u-btn-container">
                        <button class="u-btn-send-message">Send</button>
                    </div>
                </form>
            </div>
            <Loader v-else></Loader>
            <div class="u-map-container">
                <Map></Map>
            </div>
        </div>
    </div>
    <ModalCommon v-if="modalIsOpen" @on:close="closeModal">
        <template v-slot:header>
            <h2 class="u-title">Message sent</h2>
        </template>
        <template v-slot:body class="u-modal-body">
            <p>Thank you for your message!</p>
            <p>I will be in contact with you soon!</p>
        </template>
    </ModalCommon>
</template>
<script setup lang="ts">

import { onMounted, ref } from 'vue';

import InputCommon from '@/components/InputCommon.vue';
import TextAreaCommon from '@/components/TextAreaCommon.vue';
import ModalCommon from '@/components/ModalCommon.vue';
import Loader from '@/components/Loader.vue';
import Map from '@/components/Map.vue';
import { useSendEmail } from '@/stores/sendEmail';

interface validationError {
    type: string,
    value: string,
    msg: string,
    path: string,
    localtion: string
}

const validationIsPending = ref(false);
const modalIsOpen = ref(false);
const sendEmail = useSendEmail();
const form = ref({
      name: '',
      email: '',
      message: ''
    });

const validationMsg = ref<validationError[]>([]);

const openModal = async () => {
        modalIsOpen.value = true;
    }

    const closeModal = () => {
        modalIsOpen.value = false;
    }

const sendEmailMessage = async() => {
    try {
        validationIsPending.value = true;
        const { errors } = await sendEmail.sendEmail(form.value.name, form.value.email, form.value.message);
        if (errors.length > 0) {
            validationMsg.value = errors;
        } else {
            openModal();
            clearValues();
        } 
      } catch (error) {
            throw new Error(`Error: ${error}`);
      } finally {
            validationIsPending.value = false;
      }
}
 
const clearValues = () => {
    validationMsg.value = [];
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
}

</script>
<style scoped>

.u-contact {
    margin-top: 2rem;
    overflow: hidden;
}

.u-contact p {
    padding: 1rem;
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

.u-modal-body {
    color: var(--color-text);
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

    .u-contact p {
        padding: 0;
    }
}
</style>
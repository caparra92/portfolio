import { defineStore } from "pinia";
import { apiReq } from '../../config/config';

export const useSendEmail = defineStore('sendEmail', {
    state: () => ({apiReq}),
    actions: {
        async sendEmail(name: string, email: string, message: string) {
            try {
                const { data } = await this.apiReq.post('/email', {
                  name,
                  email,
                  message
                });
                return data;
              } catch (error) {
                  return error;
              }
        }
    }
});
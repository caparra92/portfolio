import { defineStore } from 'pinia'

export const useDarkThemeTrigger = defineStore('darkThemeTrigger', {
  state: () => ({darkTrigger : false}),
  actions: {
    changeValue() {
      this.darkTrigger = !this.darkTrigger;
    }
  }
});

import { defineStore } from 'pinia'

export const useDarkThemeTrigger = defineStore('darkThemeTrigger', {
  state: () => ({
    darkTrigger : false,
    mapStyle: "mapbox://styles/mapbox/streets-v12"
  }),
  actions: {
    changeValue() {
      this.darkTrigger = !this.darkTrigger;
      this.mapStyle = "mapbox://styles/mapbox/navigation-night-v1"
    }
  }
});

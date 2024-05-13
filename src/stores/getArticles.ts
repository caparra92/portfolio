import { defineStore } from 'pinia'

export const useGetArticles = defineStore('getArticles', {
  state: () => ({}),
  actions: {
    async getArticles() {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@caparra92');
      const data = await response.json();
      return data;
    }
  }
});
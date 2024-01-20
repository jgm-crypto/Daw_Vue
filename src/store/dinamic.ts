// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    isVisible: true,
  }),
  actions: {
    hideComponent() {
      this.isVisible = false;
    },
    showComponent() {
      this.isVisible = true;
    }
  }
});

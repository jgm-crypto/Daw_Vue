// store.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: '',
    }),
    actions: {
        setToken(tk: string) {
            this.token = tk;
        }
    }
});

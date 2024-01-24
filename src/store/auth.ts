// store.js
import { defineStore } from 'pinia';

interface responseData {
    token: string;
    data: {
        status: string;
        roles: string[];
    };
}


export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: '',
        severity: '',
        msg: '',
        role: [] as string[],
    }),
    actions: {
        login(data: responseData) {
            this.token = data.token;
            this.severity = 'success';
            this.msg = 'Sesión iniciada';
            this.role = data.data.roles;
        },
        logout() {
            this.token = '';
            this.severity = 'error';
            this.msg = 'Sesión cerrada';
            this.role = [];
        }
    }
});

import { defineStore } from 'pinia'
import { api, loginWithEmailQuick, logout } from '@/lib/api'

// Servicio de registro
export function registerUser(email: string, password: string) {
  return api.post('/api/register/', { email, password }) // ajusta si quitaste /api/
}

export const useAuth = defineStore('auth', {
  state: () => ({
    email: '' as string,
    isAuth: !!localStorage.getItem('access_token'),
  }),
  actions: {
    async login(email: string, password: string) {
      await loginWithEmailQuick(email, password)
      this.email = email
      this.isAuth = true
    },
    signout() {
      logout()
      this.email = ''
      this.isAuth = false
    },
  },
})

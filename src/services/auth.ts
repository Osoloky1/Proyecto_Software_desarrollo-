
import { api, loginWithEmailQuick, logout } from "../lib/api";
import { defineStore } from "pinia";


export function registerUser(email, password) {
  return api.post("/api/register/", { email, password });
}

export const useAuth = defineStore("auth", {
  state: () => ({
    email: "",
    isAuth: !!localStorage.getItem("access_token"),
  }),
  actions: {
    async login(email, password) {
      await loginWithEmailQuick(email, password);
      this.email = email;
      this.isAuth = true;
    },
    signout() {
      logout();
      this.email = "";
      this.isAuth = false;
    },
  },
});

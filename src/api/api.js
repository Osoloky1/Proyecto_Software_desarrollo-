// src/lib/api.ts
import axios from "axios";

const RAW = import.meta.env.VITE_API_URL || "";
if (!RAW) console.error("VITE_API_URL no está definida");
export const API_BASE = RAW.replace(/\/+$/, ""); // quita barra final

export const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

export const registerUser = (email: string, password: string) =>
  api.post("register/", { email, password }); // barra final por DRF

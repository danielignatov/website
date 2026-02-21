import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true, // This allows the server to be accessible on your network
    // cors: true, // This enables CORS for the dev server
    origin: "http://0.0.0.0:8080",
  },
});
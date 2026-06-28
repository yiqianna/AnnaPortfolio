import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset URLs relative so the build works on GitHub Pages
// project sites, Netlify, Vercel, or a plain static host without changes.
export default defineConfig({
  base: "./",
  plugins: [react()],
});

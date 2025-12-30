
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_dark: '#191919',
        maroon: '#750E21',
      },


      backgroundImage: {
        'light-start': "url('./start.jpg')",
        'dark-Login': "url('./Login.jpg')",
        "dark-car":"url('./login-dark.jpg')",
        "light-car":"url('./login-white.avif')",
        "signin-light":"url('./sign-in-light.jpg')",
        "signin-dark":"url('./sign-in-dark.webp')",
      }
    }
  },
  plugins: [],
  darkMode: "class"
}

export default config;
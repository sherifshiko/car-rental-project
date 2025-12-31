
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
        'light-start': "url('./src/assets/images//start.jpg')",
        'dark-Login': "url('./src/assets/images//Login.jpg')",
        "dark-car":"url('./src/assets/images//login-dark.jpg')",
        "light-car":"url('./src/assets/images//login-white.avif')",
        "signin-light":"url('./src/assets/images//sign-in-light.jpg')",
        "signin-dark":"url('./src/assets/images//sign-in-dark.webp')",
      }
    }
  },
  plugins: [],
  darkMode: "class"
}

export default config;
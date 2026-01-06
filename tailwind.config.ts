
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
        'light-start': "url('./assets/sign-in-light.jpg')",
        'dark-Login': "url('./assets/login-white.avif')",
        "dark-car":"url('./assets/login-dark.jpg')",
        "light-car":"url('./assets/login-white.avif')",
        "signin-light":"url('./assets/sign-in-light.jpg')",
        "signin-dark":"url('./assets/sign-in-dark.webp')",
        "Not-Found-background":"url('./assets/not-found/the background.jpg')",
        "Not-Found-icon":"url('./assets/not-found/the icon.png')",
        "Not-Found-text":"url('./assets/not-found/the text.png')",
      }
    }
  },
  plugins: [],
  darkMode: "class"
}

export default config;
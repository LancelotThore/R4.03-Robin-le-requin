/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forground: "hsl(var(--forground)/<alpha-value>)",
        text: "hsl(var(--text)/<alpha-value>)",
        texttitle: "hsl(var(--text-title)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        backgroundshark: "hsl(var(--bg-shark)/<alpha-value>)",
        inputbackground: "hsl(var(--input-background)/<alpha-value>)",
        buttonaccueil: "hsl(var(--button-accueil)/<alpha-value>)",
        buttoncompte: "hsl(var(--button-compte)/<alpha-value>)",
        buttoncompte2: "hsl(var(--button-compte2)/<alpha-value>)",
        buttonfalse: "hsl(var(--button-false)/<alpha-value>)",
        buttontrue: "hsl(var(--button-true)/<alpha-value>)",

      },
      backgroundImage: {
        'wallpaper-mobile': "url('wallpaper-mobile.png)"
      },
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
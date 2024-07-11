/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBgColor: 'var(--main-bg-color)',
        cardBg: 'var(--card-bg)',
        cardBorderColor: 'var(--card-border-color)',
      },
      boxShadow: {
        cardShadow: 'var(--card-shadow)',
      },
      borderRadius: {
        cardBorderRadius: 'var(--card-border-radius)',
      },
      spacing: {
        mainPaddingX: 'var(--main-padding-x)',
        mainPaddingY: 'var(--main-padding-y)',
        cardPaddingX: 'var(--card-padding-x)',
        cardPaddingY: 'var(--card-padding-y)',
      },
      borderWidth: {
        cardBorderTop: 'var(--card-border-top)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

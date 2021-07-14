module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '5rem'
    },
    fontFamily: {
      'gibson': ["Gibson"],
      'gibson2': ["Gibson2"],
      'gibson-semiBold': ["Gibson-SemiBold"],
      'gibson-semiBold2': ["GibsonSemiBd"],
      'gibson-bold':["Gibson-Bold"],
      'gibson-bold2':["Gibson-Bold2"],
      'gibson-light':["Gibson-Light"],
    },
    backgroundSize:{
      'promotion-size': 'auto 100%',
    },
    extend: {
      backgroundImage: (theme) => ({
        "promotion-back": "url('/images/promotionBack.webp')",
        "ecosistema-back": "url('/images/ecosistemaBg.webp')",
      }),
      colors: {
        "gray": "#F1F1F1",
        "gray2": "#D6D6D6",
        "green1": "#789D9E",
        "green2": "#3A6080",
        "green3": "#112B38",
        "green4": "#0b1c28",
        "green5": "#024033",
        "green6": "#094639",
        "lime1": "#7ac231",
        "lime2": "#4C8412"
      },
      height: {
        'hero-spacing': '41rem',
      },
      fontSize: {
        '3.5xl': ['2rem','2.5rem'],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

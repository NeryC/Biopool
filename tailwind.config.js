module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'gibson': ["Gibson"],
      'gibson2': ["Gibson2"],
      'gibson-semiBold': ["GibsonSemiBd"],
      'gibson-bold':["Gibson-Bold"],
      'gibson-bold2':["Gibson-Bold2"],
      'gibson-light':["Gibson-Light"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "promotion-back": "url('/images/promotionBack.webp')",
        "ecosistema-back": "url('/images/ecosistemaBg.webp')",
        "footer-back": "url('/images/coin.webp')",
      }),
      backgroundSize:{
        'promotion-size': 'auto 100%',
        'footer-size': '18%',
      },
      backgroundPosition: {
        'media-md': '25%',
        'media-lg': '0%',
      },
      colors: {
        "gray": "#F1F1F1",
        "gray2": "#828282",
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
        'promotion-md': '37rem',
        'biopoolBanner-lg': '28rem',
        'promotion': '39rem',
        'media-spacing': '28rem',
      },
      width: {
        'promotion': '28rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        'xxss': '0.72rem',
        'xll': '1.3rem',
        '2.5xl': '1.7rem',
        '3.5xl': ['2rem','2.5rem'],
        '4.5xl': '2.5rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          md: '0rem',
          sm: '1.25rem',
          xl: '2rem'
        }
      },
      padding: {
        17: '4.74rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

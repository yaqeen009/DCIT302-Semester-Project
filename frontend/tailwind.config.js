module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100: "#6CE059",
          200: "#F5DD61",
          300: "#FAA300",
          400: "#F4538A"
        },
        secondary:{
          100:"#FFF0DE",
          200:"#FFFFF1",
          300:"#FFFFD3",
          400:"#B1AFFF",
        },
        tertiary:{
          100:"#222831",
          200:"#31363F",
          300:"#848787",
          400:"#EEEEEE",
        },
        success:{
          100:"#46C3EA",
          200:"#97D5E9",
          300:"#215869",
          400:"#BBE9FF",
        },
        danger:{
          100:"#EE1739",
          200:"#B4424B",
          300:"#250202",
          400:"#F1D9DB",
        }
      },
      fontFamily: {
        comic: ['Comic Neue', 'sans-serif'],
        roboto:['Roboto','sans-serif']
      },
      fontSize:{
        'display': '57px',
        'headline': '32px',
        'title':'22px',
        'body':'20px',
        'label':'16px',
        'tablet-display':'45px',
        'tablet-headline':'28px',
        'tablet-title':'16px',
        'tablet-body':'14px',
        'tablet-label':'12px',
        'mobile-display':'36px',
        'mobile-headline':'24px',
        'mobile-title':'14px',
        'mobile-body':'12px',
        'mobile-label':'11px',
      },
      boxShadow:{
        '1dp':'0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px2px 0px rgba(0, 0, 0, 0.12), 0px 1px 3px 0px rgba(0, 0, 0, 0.20)',
        '2dp':'0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.20)',
        '3dp':'0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px 0px rgba(0, 0, 0, 0.20)',
        '4dp':'0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12), 0px 7px 8px 0px rgba(0, 0, 0, 0.20) '
      },
      screens:{
        'sm':{'max': '640px'}
      },
    },
  },
  plugins: [],
};

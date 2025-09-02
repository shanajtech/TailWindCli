 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["*"],
  theme: {
    extend: {
      // allcolors
      colors:{
        backgroundC:'#160C6D',
        hoverC:'#1BBF00',
        whathoverC:'#6B62C5',
        banneroverlayC:"rgba(106, 98, 197, 0.591)",
        card2ndh2C:"#1BBF00",
        whypC:"#726E9E",
      },
       // allgooglefont
       googlefont:{
        open:['Open Sans'],
        paprika:['Paprika'],
       },
        // container
        maxWidth: {
          headercontainer: '1170px',
        },
         // bannerpart start
         backgroundImage: {
          bannerBg: "url('../images/banner.jpg')",
        },
    },
  },
  plugins: [],
}


import daisyui from "daisyui";

export default {
    daisyui:{
        themes:['light'],
    },
  content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme : {
      extend :{
          colors:{
              primary: "#ffc727",
              dark: "#000000"
          },
          container: {
              center:true,
              padding:{
                  DEFAULT: "1rem",
                  sm: "3rem",
              },
          },
      }
  },
    plugins: [
        daisyui,
        function({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-thin": {
                    scrollbarWidth: "thin", // Firefox-specific
                    scrollbarColor: "rgb(32 50 29)"
                },
                ".scrollbar-webkit": {
                    "&::-webkit-scrollbar": {
                        width: "8px", // Adjust this value for wider scrollbar
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "white"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgb(31 41 55)",
                        borderRadius: "20px",
                        border: "1px solid white"
                    }
                }
            }
            addUtilities(newUtilities, ["responsive", "hover"]);
        }
    ],


}

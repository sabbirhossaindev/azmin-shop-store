import React, { createContext, useState, useEffect, useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false );
    
    useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme));
    },[theme]);

    const setThemeMode = mode => setTheme(mode);
    return (
        <ThemeContext.Provider value={{ theme, setThemeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

const useThemeHook = () =>{
    const {theme} = useContext(ThemeContext);
    return [theme];
}

export { ThemeProvider, ThemeContext, useThemeHook };

// use too app.css
    
/* theme dark */
// .bg-black{
//     background-color: black;
//   }
//   .bg-light-black{
//     background-color: #262626 !important;
//   }
//   .text-black{
//     color: black;
//   }
//   .text-light-black{
//     color: #262626;
//   }
//   .bg-dark-primary{
//     background-color: #fcbc73 !important;
//   }
//   .text-dark-primary{
//     color: #fcbc73 !important;
//   }
  
  /* theme light */
//   .bg-light{
//     background-color: white;
//   }
//   .bg-light-2{
//     background-color: #dadcde;
//   }
//   .bg-light-primary{
//     background-color: #191659 !important;
//   }
//   .text-light-primary{
//     color: #191659 !important;
//   }
//   .react-tel-input input{
//     width: 100% !important;
//   }
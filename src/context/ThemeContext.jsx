import { createContext, useState } from "react";

const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {


    const [theam,settheam]=useState(false)
    console.log(theam);
    

    const changetheam=()=>{
      !theam? settheam(true):settheam(false)
      console.log("theme");
      
    }
  

    return (
        <ThemeContext.Provider  value={{theam, changetheam}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
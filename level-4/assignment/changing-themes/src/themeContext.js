import React, {useState} from "react";


const ThemeContext = React.createContext()

function ThemeContextProvider (props){

    const [theme, setTheme] = useState("light")
    function themeHandler (){
    setTheme(prev=>(prev === "light" ? "dark" : "light"))
    console.log(theme)    
}
    return(<ThemeContext.Provider value={{theme:theme, themeHandler:themeHandler}}>
        {props.children}
    </ThemeContext.Provider>)
}

export {ThemeContext, ThemeContextProvider}
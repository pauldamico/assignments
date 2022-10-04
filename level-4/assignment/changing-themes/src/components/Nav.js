import { ThemeContext } from "../themeContext"
import React, {useContext} from "react"
export default function Nav(){
const {theme} = useContext(ThemeContext)
    return(<div className={`nav-div-${theme}`}>
        <nav className={`nav-${theme}`}><h2>Home</h2><h2>About</h2><h2>Contact</h2></nav>
    
    </div>)
}
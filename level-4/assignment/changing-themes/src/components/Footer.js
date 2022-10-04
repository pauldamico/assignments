import React, {useContext} from "react"
import { ThemeContext } from "../themeContext"


export default function Footer(){

    const {theme} = useContext(ThemeContext)

    return(<div className="footer-div">
        <footer className={`footer1-${theme}`}><h5 className={`footer-${theme}`}>Copyright @ 2022 Theme Changer</h5></footer>
    </div>)
}
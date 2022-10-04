import React, {useContext} from "react"
import {ThemeContext} from "../../themeContext"
export default function Button (props){

const {theme} = useContext(ThemeContext)
    return(<>
    <button className={`button-${theme}`} onClick={props.onClick}>{props.children}</button>
    </>)
}
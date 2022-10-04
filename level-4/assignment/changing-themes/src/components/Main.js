
import React from "react"
import Button from "./reuseable/Button"
import { useContext } from "react"
import {ThemeContext} from "../themeContext"
export default function Main(){

const {theme, themeHandler} = useContext(ThemeContext)

    return(<div className ={`main-${theme}-div`}>
        <h5 className="main-text">{`You are using the ${theme} theme `}</h5>
<Button onClick={themeHandler}>Change theme</Button>
    </div>)
}
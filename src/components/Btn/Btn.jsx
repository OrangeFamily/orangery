import { useState } from 'react'
import "./style.css"
export const Button=({title})=>{

    const[btnState, setBtnState]=useState(false)



    function handleClick(){
        setBtnState(btnState=>!btnState)
    }
    let toggleClassCheck=btnState ? "Active":""
    return(
        <h1 
        onClick={handleClick}
        className={`hideBtn${toggleClassCheck}`}
        >{title}</h1>
    )
}


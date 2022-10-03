import { ModalContext } from "components/context";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import './style.css'
export const Modal=(props)=>{
    const{title, price, img, text}=props
    const {closeModal}=useContext(ModalContext)
    const [closing, setClosing]=useState(false)
    const handleClose=()=>{
            setClosing(true)
            const closeTimeout =setTimeout(() =>{
                    closeModal()
                    clearTimeout(closeTimeout)
})
    }
    const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop'
    return(
        <div className={backdropClasses} onClick={handleClose}>
            <div className="modal" onClick={(event)=>event.stopPropagation()}>
                {title}
                {price}
                {text}
                <div> {img}</div>
            </div>
        </div>
    )
}
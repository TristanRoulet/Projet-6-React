import React, { useState } from 'react'
import arrow from '../assets/images/menu_arrow.png'

export default function Menu(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    const { title, description } = props

    return (
        <article className='menu'>
            <div className='menu-header'>
                <h3 className='menu-title'>{title || "Titre non défini"}</h3>
                <button className={`menu-button ${isOpen && "active"}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src={arrow} alt='Menu Arrow' className='menu-arrow'></img>
                </button>
            </div>
            <div className={`menu-description ${isOpen && "active"}`}>
                <p className='menu-text'>{description ||"Description non définie"}</p>
            </div>
        </article>
    )
}
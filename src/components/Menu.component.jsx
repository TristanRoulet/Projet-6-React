import React from 'react'
import arrow from '../assets/images/menu_arrow.png'

export default function Menu(props) {
    const { title, description, isOpen, onClick } = props

    return (
      <article className={`menu ${isOpen && 'active'}`}>
        <div className='menu-header'>
          <h3 className='menu-title'>{title || 'Titre non défini'}</h3>
          <button className={`menu-button ${isOpen && 'active'}`} onClick={onClick}>
            <img src={arrow} alt='Menu Arrow' className='menu-arrow'></img>
          </button>
        </div>
        <div className={`menu-description ${isOpen && 'active'}`}>
          <p className='menu-text'>{description || 'Description non définie'}</p>
        </div>
      </article>
    )
}

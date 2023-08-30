import React from 'react'

export default function NotFound() {
  return (
    <div className='not-found'>
      <p className='Error-404'>404</p>
      <p className='not-exist'>Oups! La page que vous demandez n'existe pas.</p>
      <a className='home-link' href={"/"}>Retourner sur la page d’accueil</a>
    </div>
  )
}

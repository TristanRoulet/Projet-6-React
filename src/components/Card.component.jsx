import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
    const { id, title, cover } = props;

    return (
        <Link className='card' id={id} to={`/logement/${id}`} style={{background : `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover}), #FF6060`}}>
            <h3 className='card-title'>{title || "Titre non défini"}</h3>
        </Link>
    )
}

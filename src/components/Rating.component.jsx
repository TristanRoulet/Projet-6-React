import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({note}) {
    
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const starColor = i < note ? 'note' : '';
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className={`star ${starColor}`} />);
    }

    return (
        <>
            {stars}
        </>
    );
}
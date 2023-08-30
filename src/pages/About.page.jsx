import React from 'react'
import aboutImg from '../assets/images/about.png'
import Menu from '../components/Menu.component'

export default function About(props) {
    const {MenuData} = props;
    
    return (
        <div className='about'>
            <div className='about-image-container'>
                <img src={aboutImg} alt='paysage' className='about-image'></img>
            </div>
            <div className='about-menus'>
                {
                    MenuData.map((menu, index) => {
                    return <Menu key={index} title={menu.title} description={menu.description}/>
                    })
                }
            </div>
        </div>
    )
}

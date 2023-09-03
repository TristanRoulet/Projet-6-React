import React from 'react'
import aboutImg from '../assets/images/about.png'
import Menu from '../components/Menu.component'

export default function About(props) {
    const {MenuData} = props;
    const [menuIndex, openMenu] = useState(null);

    const toggleMenu = (index) => {
      if (menuIndex === index) {
        openMenu(null)
      } else {
        openMenu(index)
      }
    }  
    
    return (
        <div className='about'>
            <div className='about-image-container'>
                <img src={aboutImg} alt='paysage' className='about-image'></img>
            </div>
            <div className='about-menus'>
                {
                    MenuData.map((menu, index) => {
                    return <Menu key={index} title={menu.title} description={menu.description} isOpen={menuIndex === index} onClick={() => toggleMenu(index)} />
                    })
                }
            </div>
        </div>
    )
}

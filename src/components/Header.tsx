import React, { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import Button from './Button'
import MenuItem from './MenuItem'
import MenuList from './MenuList'

interface Props {
    menuItems: string[]
}

function Header({ menuItems }: Props) {

  const [lgScreen, setLgScreen] = useState<boolean>(true);

  window.addEventListener('resize', function() {
    if (window.innerWidth > 969) {
        setLgScreen(true);
    } else {
        setLgScreen(false);
    }
  });
  
  return (
    <div className='App-header'>
        <div className='App-header__container'>
            <img className='App-header__logo' src='./logo.png' alt='Logo' />
            { (window.innerWidth > 969 && lgScreen) ? 
            <MenuList menuItems={menuItems} /> :
            ''
            }
        </div>
        <div className='App-header__container-mobile'>
            <Button url='burgers' text='Order now' />
            { (window.innerWidth <= 969 || !lgScreen) ? 
            <BurgerMenu menuItems={menuItems} /> :
            ''
            }
        </div>
        
    </div>
  )
}

export default Header

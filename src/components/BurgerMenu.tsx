import React from 'react'
import MenuList from './MenuList';

interface Props {
    menuItems: string[]
}

function BurgerMenu({ menuItems }: Props) {

  const handleClick = () : void => {
    (document.getElementsByClassName('App-burgermenu')[0] as HTMLElement).classList.toggle('App-burgermenu-active');
    if ((document.getElementsByClassName('App-burgermenu')[0] as HTMLElement).classList.contains('App-burgermenu-active')) {
        (document.getElementsByClassName('App-menu__list')[0] as HTMLElement).style.display = 'flex';
    } else {
        (document.getElementsByClassName('App-menu__list')[0] as HTMLElement).style.display = 'none';
    }
  } 

  return (
    <div className='App-burgermenu-wrapper'>
      <div onClick={() => handleClick()} className='App-burgermenu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <MenuList menuItems={menuItems} />
    </div>
  )
}

export default BurgerMenu

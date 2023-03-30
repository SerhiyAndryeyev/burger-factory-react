import React from 'react'
import MenuItem from './MenuItem';

interface Props {
    menuItems: string[]
}

function MenuList({ menuItems }: Props) {

  

  return (
    <ul className='App-menu__list'>
      {menuItems.map((item, index) => ( <MenuItem item={item} key={index} /> ))}
    </ul>
  )
}

export default MenuList

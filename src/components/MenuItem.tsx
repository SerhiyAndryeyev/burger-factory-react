import React from 'react'

interface Props {
    item: String;
}
function MenuItem({ item }: Props) {
    const handleClick = (): void => {
        if (window.innerWidth <= 969) {
            (document.getElementsByClassName('App-burgermenu')[0] as HTMLElement).classList.toggle('App-burgermenu-active');
            (document.getElementsByClassName('App-menu__list')[0] as HTMLElement).style.display = 'none';
        }
    }

  return (
    <li className='App-menu__item'>
      <a className='App-menu__link' href={'#' + item.toLowerCase()} onClick={() => handleClick()}>{ item }</a>
    </li>
  )
}

export default MenuItem

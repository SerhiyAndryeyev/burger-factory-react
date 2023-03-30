import React from 'react'

interface Props {
    info: string[]
}

function Footer({ info }: Props) {
  return (
    <div className='App-footer'>
      <img src='./logo.png' alt='logo' className='App-footer__logo' />
      <div className='App-footer__info'>
        <p className='App-footer__boldtext'>{info[0]}</p>
        <p className='App-footer__text'>{info[1]}</p>
        <p className='App-footer__text'>{info[2]}</p>
        <p className='App-footer__text'>{info[3]}</p>
      </div>
    </div>
  )
}

export default Footer

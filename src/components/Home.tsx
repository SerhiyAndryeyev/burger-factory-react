import React from 'react'
import Button from './Button'

function Home() {
  return (
    <div className='App-home'>
      <h1 className='App-home__title'>Burger Factory</h1>
      <p className='App-home__subtitle'>Your dreamed burger close to your locations!</p>
      <Button url='ingredient' text='Discover the ingredients' />
      <img src='./burger.png' alt='Burger' className='App-home__burger' />
    </div>
  )
}

export default Home

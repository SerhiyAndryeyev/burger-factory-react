import React from 'react'
import BurgersCard from './BurgersCard'
import Button from './Button'

interface Props {
    burgersCard: { name: string, src: string, ingredients: string[] }[];
}

function Burgers({ burgersCard }: Props) {

  return (
    <div className='App-burgers' id='burgers'>
      <h1 className='App-burgers__title App-title'>Burgers</h1>
      <div className='App-burgers__container'>
        { burgersCard.map((item, index) => (<BurgersCard item={item} key={index} />))}
      </div>
     <Button url='burgers' text='Order now' />
    </div>
  )
}

export default Burgers

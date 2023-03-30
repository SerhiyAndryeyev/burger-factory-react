import React from 'react'
import { SwiperSlide } from 'swiper/react'

interface Props {
    item: string
}

function IngredientsCard({ item }: Props) {
  return (
    <>
      <img className='App-ingredients__img' src={'./' + item + '.png'} alt={item} />
      <p className='App-ingredients__name'>{item}</p>
    </>
  )
}

export default IngredientsCard

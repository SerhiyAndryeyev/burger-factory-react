import React from 'react'
import IngredientsCard from './IngredientsCard'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar, Mousewheel } from "swiper";

interface Props {
    ingredients: string[]
}

function Ingredients({ ingredients }: Props) {

  return (
    <>
    <div className='App-ingredients' id='ingredient'>

        
      <h1 className='App-ingredients__title App-title'>Ingredients</h1>
      <p className='App-ingredients__subtitle  App-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.</p>
      <div className='App-ingredients__container-wrapper'>
        

    <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        grabCursor={true}
        freeMode={true}
        scrollbar={false}
        mousewheel={true}
        modules={[FreeMode, Mousewheel]}
        className="mySwiper App-ingredients__container"
      >
        { ingredients.map((item, index) => (
            <SwiperSlide key={index} className='App-ingredients__card'>
                <IngredientsCard item={item} />
            </SwiperSlide>
        )) }
    </Swiper>
      </div>
      <p className='App-ingredients__text  App-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.</p>
      
    </div>
    </>
  )
}

export default Ingredients

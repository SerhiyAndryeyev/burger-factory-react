import React from 'react'
import Button from './Button'

interface Props {
    item: {
        name: string,
        src: string,
        ingredients: string[]
    }
}
function BurgersCard({ item }: Props) {

  const handleClick = (e: any) : void => {
    let num: number = 0;
    for(let i = 0; i < document.getElementsByClassName('App-burgers__details').length; i++) {
        if ((document.getElementsByClassName('App-burgers__details')[i] as HTMLElement) == e.target) {
            num = i;
        }
    }
    if (e.target.innerHTML == 'Details') {
        (document.getElementsByClassName('App-burgers__ingredient-wrapper')[num] as HTMLElement).style.display = 'block';
        (document.getElementsByClassName('App-burgers__details')[num] as HTMLElement).innerHTML = 'Reduce';
    } else {
        (document.getElementsByClassName('App-burgers__ingredient-wrapper')[num] as HTMLElement).style.display = 'none';
        (document.getElementsByClassName('App-burgers__details')[num] as HTMLElement).innerHTML = 'Details';
    }
  }

  return (
    <div className='App-burgers__card'>
     <p className='App-burgers__subtitle App-subtitle'>{ item.name }</p> 
     <img className='App-burgers__img' src={'./' + item.src + '.png'} alt={item.src} />
     <div className='App-burgers__ingredient-wrapper'>
        <h3 className='App-burgers__ingredientTitle'>Ingredient</h3>
        {item.ingredients.map((item, index) => (
        <p key={index} className='App-burgers__ingredient'>{item}</p>
        ))}
     </div>
     <p className='App-burgers__details' onClick={(e) => handleClick(e)}>Details</p>
    </div>
  )
}

export default BurgersCard

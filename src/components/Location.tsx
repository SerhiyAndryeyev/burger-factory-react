import React from 'react'

interface Props {
    info: string[]
}

function Location({ info }: Props) {
  return (
    <div className='App-location' id='location'>
      <h1 className='App-location__tile App-title'>Location</h1>
      <div className='App-location__container'>
        <p className='App-location-boldtext App-subtitle'>{info[0]}</p>
        <p className='App-location-text App-text'>{info[1]}</p>
        <p className='App-location-text App-text'>{info[2]}</p>
        <p className='App-location-text App-text'>{info[3]}</p>
      </div>
      <div className='App-location__map'>
        <img className='App-location__img' src='./location.png' alt='map' />
        <div className='App-location__loc-wrapper'>
            <img className='App-location__loc' src='./loc.png' alt='location' />
        </div>
      </div>
    </div>
  )
}

export default Location

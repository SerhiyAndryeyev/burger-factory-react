import React from 'react'

interface Props {
    text: string,
    url: string 
}

function Button({ text, url }: Props) {
  return (
    <button onClick={() => window.location.href='#' + url} className='App-button'>
      { text }
    </button>
  )
}

export default Button

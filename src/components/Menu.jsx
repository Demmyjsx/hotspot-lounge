import React, { useState } from 'react'
import { sliderLists } from '../constants'

export default function Menu() {

    const {currentIndex , setCurrentIndex} = useState()
  return (
    <section id="menu" aria-labelledby="menu-heading">
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
        <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
        </ h2>

        <nav className="cocktail-tabs" ar>
            {sliderLists.map((cocktail, index)=>{
                const isactive = index === currentIndex;
            })}
        </nav>
</ section>
  )
}

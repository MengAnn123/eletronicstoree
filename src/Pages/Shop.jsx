import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/offers/Offers'
import NewLetter from '../Components/NewLetter/NewLetter'




const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
       
        <NewLetter/>
    </div>
  )
}

export default Shop
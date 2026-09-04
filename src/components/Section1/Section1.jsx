import React from 'react'
import Navbar from './Navbar'
import Bottom from './Bottom'
const Section1 = (props) => {
  return (

    <div className="h-screen w-full">
      <Navbar />
      <Bottom cardData={props.cardData} />
    </div>
  )
}

export default Section1
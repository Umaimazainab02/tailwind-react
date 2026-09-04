import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
const Bottom = (props) => {
  return (
    <div className="flex justify-between py-12 px-10 h-[86vh]  ">
        <BottomLeft />
        <BottomRight cardData={props.cardData} />
    </div>
  )
}

export default Bottom
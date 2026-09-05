import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
const Bottom = (props) => {
  return (
    <div className="
      flex flex-col lg:flex-row
      justify-between
      gap-6 lg:gap-0
      py-8 lg:py-12
      px-4 lg:px-10
      min-h-[86vh]
    ">
      
      <BottomLeft />

      <BottomRight cardData={props.cardData} />

    </div>
  )
}
export default Bottom
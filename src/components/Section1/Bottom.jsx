import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
const Bottom = () => {
  return (
    <div className="flex justify-between py-12 px-10 h-[86vh]  ">
        <BottomLeft />
        <BottomRight />
    </div>
  )
}

export default Bottom
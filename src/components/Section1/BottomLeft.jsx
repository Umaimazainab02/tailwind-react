import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'

const BottomLeft = () => {
  return (
   <div className="
  flex flex-col
  justify-between
  h-full
  w-full lg:w-1/4
  p-6
  mr-0 lg:mr-6
  shrink-0
">

      <div>
        <h1 className="
          text-black font-bold
          text-4xl lg:text-5xl
          leading-[1.1]
        ">
          Prospective customer segmentation
        </h1>

        <p className="
          text-gray-600
          mt-5
          pr-2
        ">
          Depending on customer satisfaction and access to banking products,
          potential target audience can be divided into three groups.
        </p>
      </div>

      <div className="text-5xl font-bold mt-5 md:mt-20">
        <RiArrowRightUpLine />
      </div>

    </div>
  )
}

export default BottomLeft
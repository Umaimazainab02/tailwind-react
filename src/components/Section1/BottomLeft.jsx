import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'
const BottomLeft = () => {
  return (
    <div className="flex flex-col justify-between h-full w-2/4   p-6 mr-6">
     <div className=''>
      <h1 className='text-black font-bold text-5xl leading-[1.1]  '>Prospective customer segmentation</h1>
      <p className='text-gray-600 mt-5 pr-8 '>Depending on customer satisfaction and access to banking products , potential target audience can be divided into three groups.</p>
     </div> 
     <div className="text-5xl font-bold">
        <RiArrowRightUpLine />  
          </div>
    </div>

  )
}

export default BottomLeft
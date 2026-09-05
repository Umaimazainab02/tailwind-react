import React from 'react'
import Rightcard from './Rightcard'

const BottomRight = (props) => {
  return (
    <div className="
      w-full lg:w-2/3
      h-[350px] lg:h-full
      overflow-x-auto
      flex flex-row flex-nowrap
      gap-4
      px-1 lg:px-8
      pb-4
    ">
      
      {props.cardData.map((elem) => {
        return (
          <Rightcard
            key={elem.id}
            image={elem.image}
            id={elem.id}
            color={elem.color}
            text={elem.text}
            status={elem.status}
          />
        )
      })}

    </div>
  )
}

export default BottomRight
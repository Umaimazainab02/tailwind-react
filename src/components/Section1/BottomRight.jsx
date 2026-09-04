import React from 'react'
import Rightcard from './Rightcard'
const BottomRight = (props) => {
    return (
        <div className=" w-2/3 h-full overflow-x-auto flex flex-row flex-nowrap gap-4 px-8">
            {props.cardData.map(function (elem) {
                return <Rightcard image={elem.image} id={elem.id} text={elem.text} status={elem.status}  />
            })}
        </div>
    )

}
export default BottomRight
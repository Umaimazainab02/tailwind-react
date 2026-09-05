import React from 'react'
import { RiArrowRightLine } from "@remixicon/react";

const Rightcard = (props) => {
    return (
        <div className=" w-75 h-full  shrink-0 relative overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover  brightness-60" src={props.image} alt="" />

            <div className="absolute bottom-0 left-0 right-0 h-full  p-6 flex justify-between flex-col">
                <div className=" font-bold text-black bg-white hover:bg-purple-400 h-10 w-10 rounded-full flex items-center justify-center text-2xl">
                    {props.id}
                </div>
                <div>
                    <h3 className='text-gray-300 text-lg px-3 mb-7'>{props.text}</h3>
                    <div className="flex flex-row  gap-2 mt-4 text-white font-bold">
                        <button style={{ backgroundColor: props.color }} className=" text-white py-2 px-4 rounded-full   hover:brightness-75">{props.status}</button>
                        <RiArrowRightLine
                            style={{ backgroundColor: props.color }}
                            className="text-white rounded-full h-10 w-10"
                        />
                    </div>
                </div>
            </div>
        </div>)
}

export default Rightcard
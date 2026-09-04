import React from 'react'
import { RiArrowRightLine } from "@remixicon/react";

const Rightcard = (props) => {
    return (
        <div className=" w-65 h-full  shrink-0 relative overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover brightness-60" src={props.image} alt="" />

            <div className="absolute bottom-0 left-0 right-0 h-full  p-6 flex justify-between flex-col">
                <div className=" font-bold text-black bg-white h-10 w-10 rounded-full flex items-center justify-center text-2xl">
                    {props.id}
                </div>
                <div>
                    <h3 className='text-gray-300 text-lg px-3 mb-7'>{props.text}</h3>
                    <div className="flex flex-row  gap-2 mt-4 text-white font-bold">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">{props.status}</button>
                        <RiArrowRightLine className="text-white bg-blue-500 rounded-full h-10 w-10" />

                    </div>
                </div>
            </div>
        </div>)
}

export default Rightcard
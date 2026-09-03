import React from 'react'
import { RiArrowRightLine } from "@remixicon/react";

const Rightcard = () => {
    return (
        <div className=" w-65 h-full relative overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover brightness-60" src="https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

            <div className="absolute bottom-0 left-0 right-0 h-full  p-6 flex justify-between flex-col">
                <div className=" font-bold text-black bg-white h-10 w-10 rounded-full flex items-center justify-center text-2xl">
                    1
                </div>
                <div>
                    <h3 className='text-gray-300 text-lg px-3 mb-7'>Prime customers that have access to bank credit and are satisfied with the current products.</h3>
                    <div className="flex flex-row  gap-2 mt-4 text-white font-bold">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Satisfied</button>
                         <RiArrowRightLine className="text-white bg-blue-500 rounded-full h-10 w-10" />

                    </div>
                </div>
            </div>
        </div>)
}

export default Rightcard
import React from 'react'

const Navbar = () => {
  return (
    <div className="
      flex
      items-center
      justify-between
      px-4 sm:px-6 lg:px-10
      py-4 lg:py-6
      gap-3
    ">

      <h1 className="
        uppercase
        bg-black
        text-white
        px-2 lg:px-5
        py-2
        rounded-full
        text-[10px] sm:text-sm
        whitespace-nowrap
      ">
        Target Audience
      </h1>

      <button className="
        text-black
        uppercase
        tracking-widest
        bg-gray-200
        rounded-full
        px-2 lg:px-6
        py-2
        text-[10px] sm:text-[5px] lg:text-sm
        whitespace-nowrap
      ">
        Digital banking platform
      </button>

    </div>
  )
}

export default Navbar
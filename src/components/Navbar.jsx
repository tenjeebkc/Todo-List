import React from 'react'

const Navbar = () => {
  return (
    <div className="nav flex bg-black text-white p-4 justify-between ">
        <div className="logo">
        <span className='font-bold mx-3 ' >iTask</span>
        </div>
        <ul className='flex gap-4 mx-1 ' > 
            <li className='cursor-pointer transition-all hover:font-bold'>Home</li>
            <li className='cursor-pointer transition-all hover:font-bold'>Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar

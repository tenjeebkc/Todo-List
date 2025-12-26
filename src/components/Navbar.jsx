import React from 'react'

const Navbar = () => {
  return (
    <div className="nav flex bg-violet-800 text-white p-4 justify-between ">
        <div className="logo">
        <span className='font-bold mx-6 ' >iTask</span>
        </div>
        <ul className='flex gap-5 mx-6 ' > 
            <li className='cursor-pointer transition-all hover:font-bold'>Home</li>
            <li className='cursor-pointer transition-all hover:font-bold'>Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar

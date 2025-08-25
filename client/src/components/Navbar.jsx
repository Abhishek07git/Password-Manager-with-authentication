import React from 'react'

const Navbar = () => {

  return (
    <nav className='bg-slate-700 text-white'>
      <div className="mycontainer flex flex-col sm:flex-row justify-between items-center px-4 py-5 h-auto sm:h-14 gap-3 sm:gap-0">

        <div className="logo font-bold text-white text-2xl">
          &lt;
          <span className='text-green-700'>/</span>
          Password
          <span className='text-green-700'>-Manager /</span>
          &gt;
        </div>
     
        <a
          className='cursor-pointer text-white flex items-center'
          href='https://github.com/Abhishek07git'
        >
          <img className='invert w-8 sm:w-10 p-1' src="icons/github.png" alt="Github Logo" />
          <span className='font-bold px-2'>GitHub</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

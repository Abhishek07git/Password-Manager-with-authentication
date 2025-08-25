import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center 
        fixed bottom-0 w-full'>
            <div className='text-2xl  font-bold text-center'>
                &copy;
                &lt;
                <span className='text-green-700'>/</span>
                Password
                <span className='text-green-700'>-Manager /</span>
                &gt;
            </div>
            <div className='text-center'>Created by Abhishek Kanoujia</div>
        </div>
    )
}

export default Footer

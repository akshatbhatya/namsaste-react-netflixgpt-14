import React from 'react'

function Forms() {
    return (
        <div>
            <form action="" className='mx-auto w-[500px] flex justify-center items-center gap-3 flex-col bg-black py-10 rounded-md'>

                <h1 className='text-white font-extrabold'>Sign Up</h1>
                <hr className='border border-white w-[200px]' />
                <input type="email" placeholder='Enter your Email' className='capitalize w-auto text-black p-2' />
                <input type="email" placeholder='password' className='capitalize w-auto text-black p-2' />
                <button type="submit" className='bg-red-600 text-white font-medium py-2 px-4 rounded-sm capitalize '>submit</button>
            </form>
        </div>
    )
}

export default Forms

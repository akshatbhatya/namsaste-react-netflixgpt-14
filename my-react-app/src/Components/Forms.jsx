import React from 'react'

function Forms() {
    return (
        <div>
            <form action="" className='mx-auto w-6/12 flex justify-center items-center gap-3 flex-col bg-black py-20 rounded-md'>
                <input type="email" placeholder='Enter your Email' className='capitalize text-black' />
                <input type="email" placeholder='password' className='capitalize text-black' />
                <button type="submit" className='bg-red-600 text-white font-medium py-2 px-4 rounded-sm'>submit</button>
            </form>
        </div>
    )
}

export default Forms

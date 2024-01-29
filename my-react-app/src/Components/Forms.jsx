import React, { useState } from 'react'

function Forms() {

    let [isSign,setSign]=useState(false)
    return (
        <div>
            <form action="" className='mx-auto w-[500px] flex justify-center items-center gap-3 flex-col bg-black py-10 rounded-md'>

                <h1 className='text-white font-semibold '>{isSign?"Sign Up":"Sign in"}</h1>
                <hr className='border border-white w-[200px]' />

                {
                    isSign && <input type="email" placeholder='full name' className='capitalize w-auto text-white p-2 bg-slate-800' />
                }

                <input type="email" placeholder='Enter your Email' className='capitalize w-auto text-white p-2 bg-slate-800' />
                <input type="email" placeholder='password' className='capitalize w-auto  text-white p-2 bg-slate-800'  />
                <button type="submit" className='bg-red-600 text-white font-medium py-2 px-4 rounded-sm capitalize '>submit</button>
                <p className='text-white capitalize cursor-pointer' onClick={()=>setSign(!isSign)}>{isSign?"alredy registed? sign in now !":"not registed? sign up now !"}</p>
            </form>
            
        </div>
    )
}

export default Forms

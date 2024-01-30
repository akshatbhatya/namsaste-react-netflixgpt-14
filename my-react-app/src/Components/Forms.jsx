import React, { useState } from 'react'

function Forms() {

    let intialData={
        email:"",
        password:"",
        fullname:""


    }

    let [isSign,setSign]=useState(false);

    let [formInput,setFormInput]=useState(intialData)


    let handleSubmit=(e)=>{
        e.preventDefault()
    }


    let handleOnchange=(e)=>{
        let target=e.target
        setFormInput((prev)=>({...prev,[target.name]:target.value}));
        console.log(formInput);
           
    }
    return (
        <div>
            <form action="" className='mx-auto w-[500px] flex justify-center items-center gap-3 flex-col bg-black py-10 rounded-md' onSubmit={handleSubmit}>

                <h1 className='text-white font-semibold '>{isSign?"Sign Up":"Sign in"}</h1>
                <hr className='border border-white w-[200px]' />

                {
                    isSign && <input type="email" placeholder='full name' className='capitalize w-auto text-white p-2 bg-slate-800' name='fullname' onChange={handleOnchange} value={formInput.fullname}/>
                }

                <input type="email" placeholder='Enter your Email' className='capitalize w-auto text-white p-2 bg-slate-800' name='email' onChange={handleOnchange} value={formInput.email} />

                <input type="email" placeholder='password' className='capitalize w-auto  text-white p-2 bg-slate-800' name='password' onChange={handleOnchange} value={formInput.password}/>
                
                <button type="submit" className='bg-red-600 text-white font-medium py-2 px-4 rounded-sm capitalize '>submit</button>
                <p className='text-white capitalize cursor-pointer' onClick={()=>setSign(!isSign)}>{isSign?"alredy registed? sign in now !":"not registed? sign up now !"}</p>
            </form>
            
        </div>
    )
}

export default Forms

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormValidation from './FormValidation';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from "firebase/auth";

function Forms() {
    let navigate = useNavigate()

    let intialData = {
        email: "",
        password: "",
        fullname: "",
    }

    let [isSign, setSign] = useState(false);

    let [formInput, setFormInput] = useState(intialData);
    let [errorMessage, setErrorMessage] = useState(null)


    let handleSubmit = (e) => {
        e.preventDefault()
        let message = FormValidation(formInput.email, formInput.password);
        setErrorMessage(message)

        if (message) return

        if (isSign) {

            createUserWithEmailAndPassword(auth, formInput.email, formInput.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    
                    // ...
                    updateProfile(user, {
                        displayName:formInput.fullname, photoURL: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                      }).then(() => {
                        // Profile updated!
                        // ...
                        navigate("/browse")
                      }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error)
                      })
                })
                
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, formInput.email, formInput.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });
        }
    }


    let handleOnchange = (e) => {
        let target = e.target
        setFormInput((prev) => ({ ...prev, [target.name]: target.value }));


    }
    return (
        <div>
            <form action="" className='mx-auto w-[500px] flex justify-center items-center gap-3 flex-col bg-black py-10 rounded-md' onSubmit={handleSubmit}>

                <h1 className='text-white font-semibold '>{isSign ? "Sign Up" : "Sign in"}</h1>
                <hr className='border border-white w-[200px]' />

                {
                    isSign && <input type="text" placeholder='full name' className='capitalize w-auto text-white p-2 bg-slate-800' name='fullname' onChange={handleOnchange} value={formInput.fullname} />
                }

                <input type="email" placeholder='Enter your Email' className='capitalize w-auto text-white p-2 bg-slate-800' name='email' onChange={handleOnchange} value={formInput.email} />

                <input type="password" placeholder='password' className='capitalize w-auto  text-white p-2 bg-slate-800' name='password' onChange={handleOnchange} value={formInput.password} />
                <p className='text-red-700 font-medium'>{errorMessage}</p>

                <button type="submit" className='bg-red-600 text-white font-medium py-2 px-4 rounded-sm capitalize '>submit</button>
                <p className='text-white capitalize cursor-pointer' onClick={() => setSign(!isSign)}>{isSign ? "alredy registed? sign in now !" : "not registed? sign up now !"}</p>
            </form>

        </div>
    )
}

export default Forms

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
    signInSuccess,
    signInFailure

} from '../features/userSlice'

function SignIn() {
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    )

    const { currentUser, error } = useSelector((state) => state.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(currentUser){
            navigate('/')
        }

        dispatch(signInFailure(null))
    }, [])


    const handleChange = (e) => {
        setFormData(
            {...formData, [e.target.id]: e.target.value}
        )
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        dispatch(signInFailure(null))

        fetch('/api/v1/auth/signin', {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData) 
        })
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            if(data.success == false){
                dispatch(signInFailure(data.message))
                return
            }

            setFormData(
                {
                    username: '',
                    email: '',
                    password: ''
                }
            )

            dispatch(signInSuccess(data))
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
            dispatch(signInFailure(error.message))
        })
    }

    return (
        <div className='flex bg-gradient-to-br from-gray-50 to-amber-200 h-[100vh] w-[100vw] p-10'>
            <div className='flex justify-center sm:justify-start w-full'>
                <div className='hidden sm:flex justify-center w-[60%]'>
                    <img className='h-[40vw]' src="/images/image-signin.png"/>
                </div>

                <div className='p-5 w-[34%]'>
                    <h1 className='text-3xl text-[#845EC2] font-semibold text-center'>
                        Welcome to 
                        <span className='font-bold font-serif text-[#402768]'> SwiftStore</span>
                    </h1>

                    <form onSubmit={handleSignIn} className='flex flex-col shadow-lg mt-7 border sm:border-dashed border-blue-800 px-5 py-7 rounded-xl'>
                        <input value={formData.username} onChange={handleChange} className='p-3 rounded-xl focus:outline-none text-violet-900' type="text" id="username" placeholder='Username' />
                        <span className="text-gray-500 text-center">or</span>
                        <input value={formData.email} onChange={handleChange} className='p-3 rounded-xl focus:outline-none text-violet-900' type="email" id="email" placeholder='Email' />
                        <input value={formData.password} onChange={handleChange} className='p-3 mt-9 rounded-xl focus:outline-none text-blue-600' type="password" id="password" placeholder='Password' />
                        
                        {error &&
                            <p className='text-red-500 text-center mt-2 text-sm'>{error}</p>
                        }

                        <button type='submit' className="relative mt-4 uppercase py-2 px-8 text-[#402768] text-base font-bold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out shadow-sm hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0" >
                            sign in
                        </button>

                        <p className='text-gray-500 text-center mt-5 sm:mt-2'>
                            Dont have an account?
                            <Link to={'/signup'} className='text-blue-700 font-semibold opacity-75 hover:opacity-100'> Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn

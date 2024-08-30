import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const [formData, setFormData] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    )
    const [signupResponse, setSignupResponse] = useState(
        {
            responseCode: null,
            responseMessage: ''
        }
    )

    const navigate = useNavigate()

    const { currentUser } = useSelector((state) => state.user)
    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [])


    const handleChange = (e) => {
        setFormData(
            { ...formData, [e.target.id]: e.target.value }
        )
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        setSignupResponse(
            {
                responseCode: null,
                responseMessage: ''
            }
        )

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/signup`, {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                if (data.success == false) {
                    setSignupResponse(
                        {
                            responseCode: data.statusCode,
                            responseMessage: data.message
                        }
                    )
                    return
                }

                setFormData(
                    {
                        name: '',
                        username: '',
                        email: '',
                        password: ''
                    }
                )

                setSignupResponse(
                    {
                        responseCode: data.statusCode,
                        responseMessage: 'Account created redirecting to login page ...'
                    }
                )

                setTimeout(() => {
                    navigate('/signin')
                }, 3000);

            })
            .catch((error) => {
                console.log(error)
                setSignupResponse(
                    {
                        responseCode: error.statusCode,
                        responseMessage: error.message
                    }
                )
            })
    }

    return (
        <div className='flex bg-gradient-to-br from-gray-50 to-amber-200 h-[100vh] w-full p-10'>
            <div className='flex justify-center sm:justify-start w-full'>
                <div className='hidden sm:flex justify-center w-[60%]'>
                    <img className='h-[40vw]' src="/images/image-signup.png" />
                </div>

                <div className='p-5 sm:w-[34%]'>
                    <h1 className='text-3xl text-[#845EC2] font-semibold text-center'>
                        Welcome to
                        <span className='font-bold font-serif text-[#402768]'> SwiftStore</span>
                    </h1>

                    <form onSubmit={handleSignUp} className='flex flex-col gap-2 shadow-lg mt-7 border sm:border-dashed border-blue-800 px-5 py-7 rounded-xl'>
                        <input value={formData.name} onChange={handleChange} className='p-3 rounded-xl focus:outline-none text-violet-900' type="text" id="name" placeholder='Name' />
                        <input value={formData.username} onChange={handleChange} className='p-3 rounded-xl focus:outline-none text-violet-900' type="text" id="username" placeholder='Username' />
                        <input value={formData.email} onChange={handleChange} className='p-3 rounded-xl focus:outline-none text-violet-900' type="email" id="email" placeholder='Email' />
                        <input value={formData.password} onChange={handleChange} className='p-3 rounded-xl focus:outline-none text-blue-600' type="password" id="password" placeholder='Password' />

                        {signupResponse.responseMessage &&
                            <p style={{ color: signupResponse.responseCode > 299 ? '#ef4444' : '#22c55e' }} className='text-center mt-2 text-sm'>{signupResponse.responseMessage}</p>
                        }

                        <button type='submit' className="relative mt-3 uppercase py-2 px-8 text-[#402768] text-base font-bold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out shadow-sm hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0" >
                            sign up
                        </button>

                        <p className='text-gray-500 text-center mt-5 sm:mt-0'>
                            Have an account?
                            <Link to={'/signin'} className='text-blue-700 font-semibold opacity-75 hover:opacity-100'> Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

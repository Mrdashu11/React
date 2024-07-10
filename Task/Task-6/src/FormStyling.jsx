import React, { useState } from 'react'

function FormStyling() {
    const [formData, setformData] = useState ({
        email : "",
        password : ""
    })

    function handleIn(el){
        const{name,value} = el.target
        setformData({
            ...formData,
            [name] : value
        })
    }

    function handleSubmit(el){
        el.preventDefault()
        // console.log(formData)
        alert(`${formData}`)
    }

    return (
        <div className='border' id='form'>

            <form action="" onSubmit={handleSubmit}>
                <div className='text-center icons'>
                    <h4 className='pb-1'>Sign In</h4>
                    <i class="ri-facebook-line"></i><i class="ri-google-line"></i><i class="ri-linkedin-line"></i>
                    <p className='mt-2 text-secondary'>or use your email account</p>
                </div>

                <div className='mt-4'>
                    <label htmlFor="">Enter your email</label>
                    <input type="text" name="email" id="" placeholder='email' value={formData.email} onChange={handleIn} className='form-control mt-1' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="">Enter your password</label>
                    <input type="text" name="password" id="" placeholder='password' value={formData.password} onChange={handleIn} className='form-control mt-1' />
                </div>
                <div className='mt-3'>
                    <input type="checkbox" name="" id="" className='me-1' />I agree
                </div>
                <div>
                    <button type='button' className='btn border ps-5 pe-5 pt-2 pb-2 fs-6 mt-4 rounded rounded-5 text-white'>SIGN IN</button>
                </div>
            </form>
            <div className='sidebox text-center text-white'>
                <div>
                    <h2>Welcome Back!</h2>
                    <h6>Enter your personal details <br /> to your employee account</h6>
                    <button className='btn border mt-4'>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default FormStyling

import Image from 'next/image'
import React from 'react'
import SignupForm from './_components/sign-up-form'
const SignupPage = () => {
    return (
        <div className='w-full h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-6 py-6 md:py-0'>
            <div className=' w-full md:w-1/2 flex items-center justify-end'>
                <Image src="/assets/images/auth11111.jpeg" alt="Auth Image" width={1000} height={1000} className='object-contain w-[700px] h-[450px] md:h-[550px] lg:h-[775px]' />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-start px-4 md:px-0'>
                <SignupForm />
            </div>
        </div>)
}
export default SignupPage
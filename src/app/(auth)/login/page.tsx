import Image from 'next/image'
import React, { Suspense } from 'react'
import LoginForm from './_components/login-form'
const LoginPage = () => {
    return (
        <div className='w-full h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-6 py-6 md:py-0'>
            <div className=' w-full md:w-1/2 flex items-center justify-end '>
                <Image src="/assets/images/auth11111.jpeg" alt="Auth Image" width={1000} height={1000} className='object-contain w-[700px] h-[450px] md:h-[550px] lg:h-[691px]' />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-start px-4 md:px-0'>
                <Suspense fallback={<div>Loading...</div>}>
                    <LoginForm />
                </Suspense>
            </div>
        </div>)
}
export default LoginPage
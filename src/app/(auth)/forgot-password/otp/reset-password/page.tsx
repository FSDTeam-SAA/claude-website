import Image from 'next/image'
import React, { Suspense } from 'react'
import ResetPasswordForm from './_components/reset-password-form'
const ResetPasswordPage = () => {
  return (
    <div className='w-full h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-6 py-6 md:py-0'>
      <div className=' w-full md:w-1/2 flex items-center justify-end'>
          <Image src="/assets/images/auth11111.jpeg" alt="Auth Image" width={1000} height={1000} className='object-contain w-[700px] h-[450px] md:h-[500px] lg:h-[565px]' />
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-start px-4 md:px-0'>
        <Suspense fallback={<div>Loading...</div>}>
          <ResetPasswordForm />
        </Suspense>


      </div>
    </div>)
}
export default ResetPasswordPage
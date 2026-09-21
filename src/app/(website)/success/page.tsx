import React, { Suspense } from 'react'
import PaymentSuccessContainer from './_components/payment-success-container'
import Loader from '@/components/ui/Loader'

const PaymentSuccessPage = () => {
  return (
    <div>
       <Suspense fallback={<Loader variant="section" message="Confirming your payment..." />}>
         <PaymentSuccessContainer />
       </Suspense>
    </div>
  )
}

export default PaymentSuccessPage

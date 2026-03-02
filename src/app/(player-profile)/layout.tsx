import Navbar from '@/components/shared/Navbar/Navbar'
import React from 'react'
import BgFooter from './_components/bg-footer'
import ScrollToTopComponent from '@/components/shared/ScrollToTop/ScrollToTop'

const PlayerProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar />
        {children}
        <ScrollToTopComponent/>
        <BgFooter/>
    </div>
  )
}

export default PlayerProfileLayout
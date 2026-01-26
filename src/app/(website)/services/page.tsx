import React from 'react'
import AnalyticSoccer from './_components/analytic-soccer'
import ServiceData from './_components/data'
import PlayerProfiles from './_components/player-profiles'

const ServicesPage = () => {
  return (
    <div>
      <ServiceData/>
      <PlayerProfiles/>
      <AnalyticSoccer/>
    </div>
  )
}

export default ServicesPage
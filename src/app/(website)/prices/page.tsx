import React from 'react'
import IndividualPlayer from './_components/individual-player'
import TeamsPlayer from './_components/teams-player'
import PlayerEvaluationProgram from './_components/player-evaluation-program'
import DevelopmentPlan from './_components/development-plan'
// import CombineJune from './_components/combine-june'
import PricesHashScrollHandler from './_components/prices-hash-scroll-handler'

const ServicesPage = () => {
  return (
    <div>
      <PricesHashScrollHandler />
      <IndividualPlayer/>
      <TeamsPlayer/>
      <PlayerEvaluationProgram/>
      <DevelopmentPlan/>
      {/* <CombineJune/> */}
    </div>
  )
}

export default ServicesPage

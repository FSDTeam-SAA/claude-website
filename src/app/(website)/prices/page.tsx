import React from 'react'
import IndividualPlayer from './_components/individual-player'
import TeamsPlayer from './_components/teams-player'
import PlayerEvaluationProgram from './_components/player-evaluation-program'
import DevelopmentPlan from './_components/development-plan'
// import CombineJune from './_components/combine-june'
import PricesHashScrollHandler from './_components/prices-hash-scroll-handler'
import PlayerEvaluationOnline from './_components/Player-evaluation-online'

const ServicesPage = () => {
  return (
    <div>
      <PricesHashScrollHandler />
      <IndividualPlayer/>
      <TeamsPlayer/>
      <PlayerEvaluationProgram/>
      <PlayerEvaluationOnline/>
      <DevelopmentPlan/>
      {/* <CombineJune/> */}
    </div>
  )
}

export default ServicesPage

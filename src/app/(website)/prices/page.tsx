import React from 'react'
import IndividualPlayer from './_components/individual-player'
import TeamsPlayer from './_components/teams-player'
// import PlayerEvaluationProgram from './_components/player-evaluation-program'

const ServicesPage = () => {
  return (
    <div>
      <IndividualPlayer/>
      <TeamsPlayer/>
      {/* <PlayerEvaluationProgram/> */}
    </div>
  )
}

export default ServicesPage
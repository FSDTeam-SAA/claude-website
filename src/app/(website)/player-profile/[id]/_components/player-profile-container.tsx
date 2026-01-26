"use client"

import React from 'react'
import PlayerInfo from './player-info'
import PlayerRating from './player-rating'
import GroundField from './ground-field'
import NationalTeam from './national-team-career'
import TransferHistory from './transfer-history'
import DefensiveStats from './defensive-stats'
import Fouls from './fouls'
import LastPlayerReport from './last-player-report'
import HighlightsVideo from './highlights-video'
import { useQuery } from '@tanstack/react-query'
import { UserProfileApiResponse } from './player-data-type'
import AttackingStats from './attacking-stats'
import DistributionGkStats from './distribution-gk-stats'
import DistributionPlayerStats from './distribution-player-stats'
import SetPieces from './set-pieces'
import GkStats from './gk-stats'
import SimilarPlayers from './similar-players'

const PlayerProfileContainer = ({id}:{id:string}) => {

   const { data, isLoading, isError, error } = useQuery<UserProfileApiResponse>({
        queryKey: ["profile-info", id],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/detail/${id}`)
            return res.json();
        },
    })

    console.log(data)

    const playerRole =   data?.data?.user?.role;

    console.log(playerRole)

  return (
    <div>
         <PlayerInfo data={data?.data } isLoading={isLoading} error={error} isError={isError} />


      <div className='container grid grid-cols-1 md:grid-cols-5 gap-6 md:px-0 pb-6'>
        <div className="md:col-span-3">
          <PlayerRating data={data?.data } isLoading={isLoading} error={error} isError={isError} />
        </div>
        <div className="md:col-span-2">
          <GroundField data={data?.data } isLoading={isLoading} error={error} isError={isError} />
        </div>
      </div>

      {/* Transfer History */}
      <section>
        <TransferHistory data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>


      {/* national team */}
      <section>
        <NationalTeam data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>

      {/* GK Stats  */}
      <section>
        {
          playerRole == "gk" && <GkStats data={data?.data } isLoading={isLoading} error={error} isError={isError} />
        }
        
      </section>

    
      {/* defensive stats section  */}
      <section>
        <DefensiveStats data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>

      {/* Attacking stats section  */}
      <section>
        {
          playerRole == "player" && <AttackingStats data={data?.data } isLoading={isLoading} error={error} isError={isError}/>
        }
        
      </section>

        {/* Distribution stats section  */}
      <section>  
        {
          playerRole == "gk" ?  <DistributionGkStats data={data?.data } isLoading={isLoading} error={error} isError={isError}/> :  <DistributionPlayerStats data={data?.data } isLoading={isLoading} error={error} isError={isError}/>
        }
      </section>

      {/* set pieces section  */}
      <section>
        {
          playerRole == "player" && <SetPieces data={data?.data } isLoading={isLoading} error={error} isError={isError} />
        }
        
      </section>

      {/* fouls section  */}
      <section>
        {
          playerRole == "player" && <Fouls data={data?.data } isLoading={isLoading} error={error} isError={isError} />
        }
        
      </section>

      

       {/* last player report section  */}
      <section>
        <LastPlayerReport data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>

      {/* highlight video  */}
      <section>
        <HighlightsVideo data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>

      {/* similar players  */}
      <section>
        <SimilarPlayers data={data?.data } isLoading={isLoading} error={error} isError={isError} />
      </section>

      
    </div>
  )
}

export default PlayerProfileContainer
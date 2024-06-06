import { DialogTrigger } from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { addMatchesDataBase } from '@/api/add-matches-to-user-db'
import { getMatchDataById } from '@/api/get-match-data-by-id'
import { getSummonerDashboard } from '@/api/get-summoner-dashboard'
import { DialogDescriptionMatch } from '@/components/dialog-description'
import { HalfPieChart } from '@/components/half-pie-chart'
import { LatestMatchesChart } from '@/components/latest-matches-chart'
import { MaestryChart } from '@/components/maestry-chart'
import { MatchBubble } from '@/components/match-bubble'
import { CustomPieChart } from '@/components/pie-chart'
import SideBar from '@/components/SideBar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UserPlayer } from '@/entities/user-player'

export function Dashboard() {
  const location = useLocation()
  const summonerInfo = location.state?.summonerInfo
  const [selectedMatch, setSelectedMatch] = useState<UserPlayer>()

  const { data: summonerData } = useQuery({
    queryKey: ['summonerData'],
    queryFn: async () => {
      const response = await getSummonerDashboard({
        puuid: summonerInfo.puuid,
      })
      return response
    },
  })

  useQuery({
    queryKey: ['addMatchesDataBase'],
    queryFn: async () => {
      const response = await addMatchesDataBase({
        gameName: summonerInfo.gameName,
        tagLine: summonerInfo.tagLine,
      })
      return response
    },
  })

  async function handleGetMatch(matchId: string) {
    const response = await getMatchDataById({ matchId })
    setSelectedMatch(response)
  }

  const latestMatchesKillsDeathsDTO =
    summonerData?.latestMatchesKillsDeathsDTO || []

  const latestMatches = latestMatchesKillsDeathsDTO.slice(0, 5)

  const latestMatchesKillsDeaths = latestMatches.map((match) => ({
    name: match.matchDate,
    Abates: match.kills,
    Mortes: match.deaths,
  }))

  const maestryPoints = summonerData?.summonerMasteryDTO.championPoints

  const maestryData = [
    { Pontos: typeof maestryPoints === 'number' ? maestryPoints : 0 },
  ]

  const pieChartData = [
    { name: 'Vitórias', value: summonerData?.summonerRankedDTO?.wins || 0 },
    { name: 'Derrotas', value: summonerData?.summonerRankedDTO?.losses || 0 },
  ]

  const noRankedGames = pieChartData.every((data) => data.value === 0)

  const totalDamageCharData = [
    { name: 'Dano Causado', value: summonerData?.totalDamageChampions || 0 },
    { name: 'Dano Recebido', value: summonerData?.totalDamageTaken || 0 },
  ]
  const totalKillsCharData = [
    { name: 'Total de abates', value: summonerData?.totalKills || 0 },
    { name: 'Total de mortes', value: summonerData?.totalDeaths || 0 },
  ]

  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-row">
        <SideBar />

        <div
          className={`ml-52 flex h-[33rem] w-full flex-col border-b-8 border-slate-900   bg-cover bg-top`}
          style={{
            backgroundImage: `url(${summonerData?.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col space-y-4 p-4 lg:flex-row lg:space-x-2 lg:space-y-0">
            <div data-testid="topo-dashboard">
              <div className="p-2 font-semibold drop-shadow-[-4px_4px_1px_rgba(0,0,0,1)]">
                <h1 className="font-league-spartan text-6xl">
                  League Of <br />
                  <span className="text-teal-600">Draven</span>
                </h1>
              </div>

              <div className="flex w-full flex-col items-center justify-center p-4 font-league-spartan text-3xl">
                <h2 className="font-league-spartan tracking-wider">
                  {summonerData?.username}
                </h2>
                <h2 className="text-2xl">Nível de invocador:</h2>
                <div className="relative pt-1 text-xl tracking-widest">
                  <img
                    src={'/images/moldura_lvl.png'}
                    alt="moldura do nível"
                    className="h-64 w-64 rounded-3xl border-2 border-teal-800 bg-black/30 p-4 pr-5 shadow-[inset__0_0_20px_10px__rgba(0,0,0,0.7)]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-4xl">
                    {summonerData?.summonerLevel}{' '}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center pt-4 font-league-spartan">
              <div
                className="mx-1 flex w-full max-w-[45rem] flex-col items-center justify-center
                rounded-xl border-2 border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding
                p-4 shadow-[inset__0_0_20px_10px__rgba(0,0,0,0.7)] backdrop-blur-sm backdrop-filter"
                data-testid="infos-ranqueada"
              >
                <h2 className="mt-2 text-3xl">Informações Ranqueadas</h2>
                <div className="flex w-full flex-row justify-around">
                  <div className="flex w-1/2 flex-col items-center justify-center p-5">
                    <div className="flex flex-row text-2xl">
                      <h2 className="pr-1 capitalize">
                        {summonerData?.summonerRankedDTO?.tier
                          ? summonerData?.summonerRankedDTO?.tier.toLocaleLowerCase()
                          : 'Sem Rank'}
                      </h2>
                      <h2>{summonerData?.summonerRankedDTO?.rank}</h2>
                    </div>
                    <img
                      src={
                        summonerData?.summonerRankedDTO?.tier
                          ? `/images/ranks/${summonerData.summonerRankedDTO?.tier}.png`
                          : '/images/ranks/UNRANKED.png'
                      }
                      alt="Tier"
                      className="h-60 w-60 pr-1"
                    />
                    <Progress
                      value={summonerData?.summonerRankedDTO?.leaguePoints}
                      className=" border-2 border-gray-700"
                    />
                    <h1 className="mt-2">
                      {summonerData?.summonerRankedDTO?.leaguePoints} PDL
                    </h1>
                  </div>

                  <div className="flex w-1/2 items-center justify-center">
                    {noRankedGames ? (
                      <h1 className="text-center text-2xl">
                        Você ainda não jogou partidas ranqueadas nessa etapa
                      </h1>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4">
                        <p className="text-2xl">Partidas Ranqueadas</p>
                        <CustomPieChart data={pieChartData} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex h-full w-full flex-col items-center">
            <div
              className="flex h-full w-full flex-row items-center justify-center"
              data-testid="mortes-abates-maestria"
            >
              <div className="flex w-full flex-col">
                <div
                  className="ml-10 flex h-96 w-5/6 items-center justify-center rounded-xl
                  border-2 border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding
                  p-4 shadow-[inset__0_0_20px_10px__rgba(0,0,0,0.7)] backdrop-blur-lg backdrop-filter"
                >
                  <LatestMatchesChart data={latestMatchesKillsDeaths} />
                </div>
              </div>

              <div
                className="m-10 flex h-96 w-2/6 flex-col items-center justify-start rounded-xl 
                border-2 border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding p-4
                shadow-[inset__0_0_20px_10px__rgba(0,0,0,0.7)] backdrop-blur-lg backdrop-filter"
              >
                <div className="mt-4 flex flex-col">
                  <h2 className="text-lg tracking-wider ">
                    | Campeão mais jogado:
                  </h2>
                  <h2 className="self-center text-2xl font-semibold text-teal-500 underline underline-offset-4">
                    {summonerData?.mostPlayedChampion}
                  </h2>
                </div>
                <div className="mt-12 h-52 w-52">
                  <MaestryChart data={maestryData} />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-8">
              <div
                className="flex h-[28rem] w-10/12 items-center justify-center rounded-xl
                border-2 border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding
                p-4 shadow-[inset__0_0_20px_10px__rgba(0,0,0,0.7)] backdrop-blur-lg backdrop-filter"
                data-testid="dano-abates-mortes-totais"
              >
                <HalfPieChart data={totalDamageCharData} />
                <div className="border-x-[12px]"></div>
                <HalfPieChart data={totalKillsCharData} />
              </div>

              <div
                className="mb-10 flex  w-11/12 items-center justify-center rounded-xl border-2
                border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding 
                shadow-[inset__0_0_20px_10px__rgba(0,0,0,0.7)] backdrop-blur-lg backdrop-filter"
                data-testid="partidas"
              >
                <ScrollArea
                  className="h-80 rounded-xl border-2 border-black bg-gray-800 
                  p-3 shadow-[inset__0_0_16px_10px__rgba(0,0,0,0.8)]"
                >
                  {latestMatchesKillsDeathsDTO.map((match, i) => (
                    <Dialog
                      key={i}
                      onOpenChange={() => handleGetMatch(match.matchId)}
                    >
                      <MatchBubble
                        key={i}
                        championImage={match.championImage}
                        kills={match.kills}
                        deaths={match.deaths}
                        assists={match.assists}
                        farm={match.farm}
                        role={match.role.toLocaleLowerCase()}
                        matchDate={match.matchDate}
                        gamemode={match.gamemode.toLocaleLowerCase()}
                        gold={match.gold}
                        win={match.win}
                        onClick={() => {}}
                      />

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Detalhes da Partida</DialogTitle>
                          <DialogDescription>
                            {selectedMatch ? (
                              <div>
                                <DialogDescriptionMatch
                                  selectedMatch={selectedMatch}
                                />
                              </div>
                            ) : (
                              <p>Carregando dados...</p>
                            )}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  ))}
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useQuery } from '@tanstack/react-query'
import {
  CircleHelp,
  CircleUserRound,
  Gamepad2,
  Home,
  MonitorDot,
  Swords,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { addMatchesDataBase } from '@/api/add-matches-to-user-db'
import { getSummonerDashboard } from '@/api/get-summoner-dashboard'
import { HalfPieChart } from '@/components/half-pie-chart'
import { LatestMatchesChart } from '@/components/latest-matches-chart'
import { MaestryChart } from '@/components/maestry-chart'
import { MatchBubble } from '@/components/match-bubble'
import { CustomPieChart } from '@/components/pie-chart'
import SideBar, { SideBarItem } from '@/components/SideBar'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Dashboard() {
  const location = useLocation()
  const summonerInfo = location.state?.summonerInfo

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
    { name: 'Vitórias', value: summonerData?.summonerRankedDTO.wins || 0 },
    { name: 'Derrotas', value: summonerData?.summonerRankedDTO.losses || 0 },
  ]

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
        <div className="h-screen">
          <SideBar>
            <SideBarItem
              icon={<Home color="rgb(209 213 219)" size={26} />}
              text="Home"
              url="/"
            />
            <SideBarItem
              icon={<Gamepad2 color="rgb(209 213 219)" size={26} />}
              text="Partidas"
              url=""
            />
            <SideBarItem
              icon={<Swords color="rgb(209 213 219)" size={26} />}
              text="Campeões"
              url="https://www.leagueoflegends.com/pt-br/champions/"
            />
            <SideBarItem
              icon={<MonitorDot color="rgb(209 213 219)" size={26} />}
              text="Live"
              url="https://lolesports.com/"
            />
            <hr className="my-2 w-full rounded-full border-2 border-slate-950" />
            <SideBarItem
              icon={<CircleUserRound color="rgb(209 213 219)" size={26} />}
              text="Contato"
              url="/contato"
            />
            <SideBarItem
              icon={<CircleHelp color="rgb(209 213 219)" size={26} />}
              text="Ajuda"
              url="/ajuda"
            />
          </SideBar>
        </div>

        <div
          className={`flex h-[33rem] w-full flex-col bg-cover bg-top`}
          style={{
            backgroundImage: `url(${summonerData?.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col space-y-4 p-4 lg:flex-row lg:space-x-2 lg:space-y-0">
            <div>
              <div className="p-2 font-semibold">
                <h1 className="font-league-spartan text-6xl">
                  League Of <br />
                  <span className="text-teal-600">Draven</span>
                </h1>
              </div>

              <div className="flex w-full flex-col items-center justify-center p-4 font-league-spartan text-2xl">
                <h2 className="font-league-spartan tracking-wider">
                  {summonerData?.username}
                </h2>
                <div className="relative pt-1 text-xl tracking-widest">
                  <img
                    src={'/images/moldura_lvl.png'}
                    alt="moldura do nível"
                    className="mr-1 h-56 w-56"
                  />
                  <span className="absolute inset-0 ml-0.5 flex items-center justify-center">
                    {summonerData?.summonerLevel}{' '}
                  </span>
                </div>
              </div>

              <div
                className="mt-4 flex flex-col rounded border-2 border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding
                p-4 text-gray-200 backdrop-blur-lg backdrop-filter"
              >
                <h2 className="text-center text-lg">
                  | Total de maestria:{' '}
                  {summonerData?.summonerMasteryDTO.championPoints}
                </h2>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center pt-4 font-league-spartan">
              <div
                className="mx-1 flex w-full max-w-[45rem] flex-col items-center justify-center
                rounded-xl border-2 border-teal-800 bg-slate-900 bg-opacity-40 bg-clip-padding
                p-4 backdrop-blur-sm backdrop-filter"
              >
                <div className="flex w-full flex-row justify-around">
                  <div className="flex w-1/2 flex-col items-center justify-center p-5">
                    <div className="flex flex-row text-2xl">
                      <h2 className="pr-1 capitalize">
                        {summonerData?.summonerRankedDTO.tier
                          ? summonerData?.summonerRankedDTO.tier.toLocaleLowerCase()
                          : 'Sem Rank'}
                      </h2>
                      <h2>{summonerData?.summonerRankedDTO.rank}</h2>
                    </div>
                    <img
                      src={
                        summonerData?.summonerRankedDTO.tier
                          ? `/images/ranks/${summonerData.summonerRankedDTO.tier}.png`
                          : '/images/ranks/UNRANKED.png'
                      }
                      alt="Tier"
                      className="h-60 w-60 pr-1"
                    />
                    <Progress
                      value={summonerData?.summonerRankedDTO.leaguePoints}
                      className=" border-2 border-gray-700"
                    />
                    <h1 className="mt-2">
                      {summonerData?.summonerRankedDTO.leaguePoints} PDL
                    </h1>
                  </div>
                  <div className="flex w-1/2 items-center justify-center">
                    <CustomPieChart data={pieChartData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex h-full w-full flex-col items-center">
            <div className="flex h-full w-full flex-row items-center justify-center">
              <div className="flex w-full flex-col">
                <div
                  className="ml-10 flex h-96 w-5/6 items-center justify-center rounded-xl border
                border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
                backdrop-blur-lg backdrop-filter"
                >
                  <LatestMatchesChart data={latestMatchesKillsDeaths} />
                </div>
              </div>

              <div
                className="m-10 flex h-96 w-2/6 flex-col items-center justify-start rounded-xl border 
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding p-4
              backdrop-blur-lg backdrop-filter"
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
            <div className="flex h-full w-full flex-row items-center justify-center">
              <div className="flex w-full flex-col">
                <div
                  className="ml-10 flex h-96 w-5/6 items-center justify-center rounded-xl border
                border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
                backdrop-blur-lg backdrop-filter"
                >
                  <HalfPieChart data={totalDamageCharData} />
                  <HalfPieChart data={totalKillsCharData} />
                </div>
              </div>
            </div>

            <div className="mt-2 flex w-5/6 flex-row items-center justify-start">
              <div
                className="ml-10 flex h-96 w-full items-center justify-center rounded-xl border
               border-gray-500 bg-slate-900 bg-opacity-40 bg-clip-padding
               backdrop-blur-lg backdrop-filter"
              >
                <ScrollArea className="h-80">
                  {latestMatchesKillsDeathsDTO.map((match, i) => (
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
                      onClick={() => {}}
                    />
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

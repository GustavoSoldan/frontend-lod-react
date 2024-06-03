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

import { getSummonerDashboard } from '@/api/get-summoner-dashboard'
import { CustomPieChart } from '@/components/pie-chart'
import SideBar, { SideBarItem } from '@/components/SideBar'

export function Dashboard() {
  const location = useLocation()
  const summonerInfo = location.state?.summonerInfo

  console.log(summonerInfo)
  const { data: summonerData } = useQuery({
    queryKey: ['summonerData'],
    queryFn: async () => {
      const response = await getSummonerDashboard({
        puuid: summonerInfo.puuid,
      })
      return response
    },
  })

  const pieChartData = [
    { name: 'Vitórias', value: summonerData?.summonerRankedDTO.wins || 0 },
    { name: 'Derrotas', value: summonerData?.summonerRankedDTO.losses || 0 },
  ]

  const pieChartData2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ]

  console.log('data: ', summonerData?.username, summonerData)

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
          <div className="flex flex-col space-y-4 p-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="flex-1">
              <div className="p-4">
                <h1 className="font-league-spartan text-6xl">
                  League Of <br />
                  <span className="text-emerald-400">Draven</span>
                </h1>
              </div>
              <div className="flex flex-col p-4">
                <div>
                  <h2 className="font-league-spartan text-2xl">
                    {summonerData?.username}
                  </h2>
                </div>
                <div>
                  <h3 className="font-league-spartan pt-2 tracking-widest">
                    {summonerData?.mostPlayedChampion} | Nível de invocador:{' '}
                    {summonerData?.summonerLevel}{' '}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center pt-4">
              <div
                className="mx-1 flex w-full max-w-[360rem] flex-col items-center justify-center
                rounded-xl border border-gray-600 bg-slate-900 bg-opacity-40 bg-clip-padding
                p-4 backdrop-blur-lg backdrop-filter"
              >
                <div className="flex w-full flex-row justify-around">
                  <div className="flex w-1/2 items-center justify-center">
                    <CustomPieChart data={pieChartData} />
                  </div>
                  <div className="flex w-1/2 items-center justify-center">
                    <CustomPieChart data={pieChartData2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex h-full w-full flex-col items-center">
            {/* <div className="flex flex-row items-center justify-center">
              <div
                className="mx-1 flex h-16 h-full w-full items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-20 backdrop-blur-lg backdrop-filter"
              >
                {summonerData?.username}
              </div>
              <div
                className="mx-1 flex h-16 h-full w-full items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-20 backdrop-blur-lg backdrop-filter"
              >
                teste1
              </div>
              <div
                className="mx-1 flex h-16 h-full w-full items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-20 backdrop-blur-lg backdrop-filter"
              >
                teste1
              </div>
              <div
                className="mx-1 flex h-16 h-full w-full items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-20 backdrop-blur-lg backdrop-filter"
              >
                teste1
              </div>
              <div
                className="mx-1 flex h-16 h-full w-full items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-20 backdrop-blur-lg backdrop-filter"
              >
                teste1
              </div>
            </div> */}

            {/* <div className="flex h-full w-full flex-row items-center justify-center">
              <div className="flex w-full flex-col">
                <div
                  className="w-6/6 ml-10 flex h-96 items-center justify-center rounded-xl border
                border border-gray-500 border-gray-500 bg-gray-600 bg-gray-600 bg-opacity-40 bg-clip-padding
                backdrop-blur-lg backdrop-filter"
                >
                  teste2
                </div>
              </div>
              <div
                className="m-10 flex h-96 w-2/6 items-center justify-center rounded-xl border 
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding p-16
              backdrop-blur-lg backdrop-filter"
              >
                teste2
              </div>
            </div> */}

            {/* <div className="mt-2 flex flex-row items-center justify-center">
              <div
                className="m-3 flex w-60 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              py-40 backdrop-blur-lg backdrop-filter"
              >
                teste3
              </div>
              <div
                className="m-3 flex w-60 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              py-40 backdrop-blur-lg backdrop-filter"
              >
                teste3
              </div>
              <div
                className="m-3 flex w-60 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              py-40 backdrop-blur-lg backdrop-filter"
              >
                teste3
              </div>
              <div
                className="m-3 flex w-60 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              py-40 backdrop-blur-lg backdrop-filter"
              >
                teste3
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

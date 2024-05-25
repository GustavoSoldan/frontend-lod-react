import {
  CircleHelp,
  CircleUserRound,
  Gamepad2,
  Home,
  MonitorDot,
  Swords,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import SideBar, { SideBarItem } from '../../components/SideBar'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-row">
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
          <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
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

        <div className="mt-2 flex h-full w-full flex-col items-center">
          <div className="flex flex-row items-center justify-center">
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
            <div
              className="mx-1 flex h-16 h-full w-full items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-20 backdrop-blur-lg backdrop-filter"
            >
              teste1
            </div>
          </div>

          <div className="flex h-full w-full flex-row items-center justify-center">
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
          </div>

          <div className="mt-2 flex flex-row items-center justify-center">
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
          </div>
        </div>
      </div>
    </>
  )
}

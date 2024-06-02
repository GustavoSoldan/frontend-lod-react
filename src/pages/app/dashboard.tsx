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

        <div className="mt-2 flex h-full w-full flex-col items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="m-2 flex h-16 w-40 items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste1
            </div>
            <div
              className="m-2 flex h-16 w-40 items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste1
            </div>
            <div
              className="m-2 flex h-16 w-40 items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste1
            </div>
            <div
              className="m-2 flex h-16 w-40 items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste1
            </div>
            <div
              className="m-2 flex h-16 w-40 items-center justify-center
              rounded-xl border border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste1
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center">
            <div className="m-2 flex w-full flex-col items-center md:w-2/3">
              <div
                className="flex h-64 w-full items-center justify-center rounded-xl border
                border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
                p-4 backdrop-blur-lg backdrop-filter"
              >
                teste2
              </div>
            </div>
            <div
              className="m-2 flex h-64 w-full items-center justify-center rounded-xl border border-gray-500 
              bg-gray-600 bg-opacity-40 bg-clip-padding p-4
              backdrop-blur-lg backdrop-filter md:w-1/3"
            >
              teste2
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center">
            <div
              className="m-2 flex h-40 w-40 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste3
            </div>
            <div
              className="m-2 flex h-40 w-40 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste3
            </div>
            <div
              className="m-2 flex h-40 w-40 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste3
            </div>
            <div
              className="m-2 flex h-40 w-40 items-center justify-center rounded-xl border
              border-gray-500 bg-gray-600 bg-opacity-40 bg-clip-padding
              p-4 backdrop-blur-lg backdrop-filter"
            >
              teste3
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

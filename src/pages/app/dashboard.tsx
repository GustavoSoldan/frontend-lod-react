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
            icon={<Home color="#000" size={28} />}
            text="Home"
            url="/"
          />
          <SideBarItem
            icon={<Gamepad2 color="#000" size={28} />}
            text="Partidas"
            url=""
          />
          <SideBarItem
            icon={<Swords color="#000" size={28} />}
            text="Campeões"
            url="https://www.leagueoflegends.com/pt-br/champions/"
          />
          <SideBarItem
            icon={<MonitorDot color="#000" size={28} />}
            text="Live"
            url="https://lolesports.com/"
          />
          <hr className="w-full border-2 border-black" />
          <SideBarItem
            icon={<CircleUserRound color="#000" size={28} />}
            text="Contato"
            url="/contato"
          />
          <SideBarItem
            icon={<CircleHelp color="#000" size={28} />}
            text="Ajuda"
            url="/ajuda"
          />
        </SideBar>
        <div className="mt-4 flex h-full w-full flex-col items-center">
          <div className="flex flex-row items-center justify-center">
            <div className="m-3 flex h-16 items-center justify-center bg-green-500 p-24">
              teste
            </div>
            <div className="m-3 flex h-16 items-center justify-center bg-green-500 p-24">
              teste
            </div>
            <div className="m-3 flex h-16 items-center justify-center bg-green-500 p-24">
              teste
            </div>
            <div className="m-3 flex h-16 items-center justify-center bg-green-500 p-24">
              teste
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col items-center justify-items-start">
            <div className="m-3 flex h-48 w-5/6 items-center justify-center bg-green-500 p-16">
              teste2
            </div>
            <div className="m-3 flex h-48 w-5/6 items-center justify-center bg-green-500 p-16">
              teste2
            </div>
          </div>

          <div className="mt-4 flex flex-row items-center justify-center">
            <div className="m-3 flex w-56 items-center justify-center bg-green-500 py-40">
              teste
            </div>
            <div className="m-3 flex w-56 items-center justify-center bg-green-500 py-40">
              teste
            </div>
            <div className="m-3 flex w-56 items-center justify-center bg-green-500 py-40">
              teste
            </div>
            <div className="m-3 flex w-56 items-center justify-center bg-green-500 py-40">
              teste
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

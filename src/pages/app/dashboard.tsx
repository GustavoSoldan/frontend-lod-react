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
      <div className="flex">
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
        <div className="w-full bg-black">conteúdo</div>
      </div>
    </>
  )
}

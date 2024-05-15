import {
  CircleHelp,
  CircleUserRound,
  Gamepad2,
  Home,
  MonitorDot,
  Swords,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import BarraLateral, { ItemBarraLateral } from '../_layouts/BarraLateral'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex">
        <BarraLateral>
          <ItemBarraLateral
            icon={<Home color="#000" size={28} />}
            text="Home"
            url="/"
          />
          <ItemBarraLateral
            icon={<Gamepad2 color="#000" size={28} />}
            text="Partidas"
            url=""
          />
          <ItemBarraLateral
            icon={<Swords color="#000" size={28} />}
            text="Campeões"
            url="https://www.leagueoflegends.com/pt-br/champions/"
          />
          <ItemBarraLateral
            icon={<MonitorDot color="#000" size={28} />}
            text="Live"
            url="https://lolesports.com/"
          />
          <hr className="w-full border-2 border-black" />
          <ItemBarraLateral
            icon={<CircleUserRound color="#000" size={28} />}
            text="Contato"
            url="/contato"
          />
          <ItemBarraLateral
            icon={<CircleHelp color="#000" size={28} />}
            text="Ajuda"
            url="/ajuda"
          />
        </BarraLateral>
        <div className="w-full bg-black">conteúdo</div>
      </div>
    </>
  )
}

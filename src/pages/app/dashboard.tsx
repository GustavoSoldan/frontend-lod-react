import { CircleHelp, Home, LayoutDashboard, LogOut, Swords } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import BarraLateral, { ItemBarraLateral } from '../_layouts/BarraLateral'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex">
        <BarraLateral>
          <ItemBarraLateral
            icon={<Home color="#000" size={35} />}
            text="Home"
          />
          <ItemBarraLateral
            icon={<LayoutDashboard color="#000" size={35} />}
            text="Dashboard"
          />
          <ItemBarraLateral
            icon={<Swords color="#000" size={35} />}
            text="Partidas"
          />
          <hr className="w-full border-2 border-black" />
          <ItemBarraLateral
            icon={<CircleHelp color="#000" size={35} />}
            text="Ajuda"
          />
          <ItemBarraLateral
            icon={<LogOut color="#000" size={35} />}
            text="Sair"
          />
        </BarraLateral>
        <div className="w-full bg-black">conteúdo</div>
      </div>
    </>
  )
}

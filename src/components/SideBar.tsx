import { UserButton, useUser } from '@clerk/clerk-react'
import {
  CircleHelp,
  CircleUserRound,
  Gamepad2,
  Home,
  MonitorDot,
  PanelLeftOpen,
  PanelRightOpen,
  Swords,
} from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

interface SideBarContextType {
  expanded: boolean
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined)

export default function SideBar() {
  const [expanded, setExpanded] = useState(true)

  const userIcon = {
    elements: {
      userButtonAvatarBox: 'w-12 h-12 border-4 border-teal-700',
      userButtonPopoverActionButton: 'text-teal-600',
    },
  }

  const { user } = useUser()

  return (
    <>
      <aside className="fixed top-0 z-10 h-screen">
        <nav
          className={`flex h-full flex-col bg-gray-800 shadow-sm transition-all
          ${expanded ? 'w-52' : 'w-16'}`}
        >
          <div className="flex items-center justify-center p-4 pb-2">
            <img
              src={'./images/logo.png'}
              alt="logo do dashboard"
              className={`overflow-hidden transition-all ${expanded ? 'w-26' : 'w-0'}`}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`rounded-full bg-teal-600 p-2 hover:bg-teal-700 ${expanded ? 'ml-6' : 'ml-0'}`}
            >
              {expanded ? (
                <PanelRightOpen
                  color="#fff"
                  size={26}
                  data-testid="abrir-dashboard"
                />
              ) : (
                <PanelLeftOpen
                  color="#fff"
                  size={26}
                  data-testid="fechar-dashboard"
                />
              )}
            </button>
          </div>

          <SideBarContext.Provider value={{ expanded }}>
            <ul className="flex flex-1 flex-col items-center px-3">
              <SideBarItem
                icon={<Home color="rgb(209 213 219)" size={26} />}
                text="Home"
                url="/"
              />
              <SideBarItem
                icon={<Gamepad2 color="rgb(209 213 219)" size={26} />}
                text="Patch Notes"
                url="https://www.leagueoflegends.com/pt-br/news/tags/patch-notes/"
              />
              <SideBarItem
                icon={<Swords color="rgb(209 213 219)" size={26} />}
                text="Campeões"
                url="https://www.leagueoflegends.com/pt-br/champions/"
              />
              <SideBarItem
                icon={<MonitorDot color="rgb(209 213 219)" size={26} />}
                text="E-sports"
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
            </ul>
          </SideBarContext.Provider>

          {!expanded ? (
            <div></div>
          ) : (
            <div
              className={`mb-2 flex w-full flex-row items-center justify-center gap-3`}
            >
              <FaGithub
                color="rgb(15 118 110)"
                size={25}
                className="cursor-pointer hover:fill-gray-300"
              />
              <Link to="https://x.com/LigaDoDreivis">
                <FaTwitter
                  color="rgb(15 118 110)"
                  size={25}
                  className="cursor-pointer hover:fill-gray-300"
                />
              </Link>
              <Link to="https://discord.gg/mUCjMJzs">
                <FaDiscord
                  color="rgb(15 118 110)"
                  size={25}
                  className="cursor-pointer hover:fill-gray-300"
                />
              </Link>
              <Link to="https://www.facebook.com/people/League-of-Draven/61560033924018/">
                <FaFacebook
                  color="rgb(15 118 110)"
                  size={25}
                  className="cursor-pointer hover:fill-gray-300"
                />
              </Link>
            </div>
          )}

          <div
            className={`flex flex-row items-center bg-gray-900 px-2 
            ${expanded ? 'justify-start' : 'justify-center py-2'}`}
          >
            <UserButton appearance={userIcon} />
            {!expanded ? (
              <div></div>
            ) : (
              <div className="flex flex-col p-2 font-semibold text-gray-200">
                <span className="text-transform: text-lg capitalize">
                  {user?.firstName}
                </span>
                <span className="text-transform: text-sm capitalize italic">
                  {user?.username}
                </span>
              </div>
            )}
          </div>
        </nav>
      </aside>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export function SideBarItem({
  icon,
  text,
  url,
}: {
  icon: string | JSX.Element
  text: string
  url: string
}) {
  const context = useContext(SideBarContext)

  if (!context) {
    throw new Error('SideBarItem must be used within a SideBarContext.Provider')
  }

  const { expanded } = context

  return (
    <>
      <Link to={url}>
        <li
          className={`group relative my-1.5 flex flex cursor-pointer items-center 
          justify-center rounded-2xl bg-gray-900 px-3 py-2 font-medium transition-colors hover:bg-teal-700
          ${expanded ? 'w-full' : 'w-12'} custom-link`}
          data-testid="options"
        >
          {icon}
          <span
            className={`overflow-hidden whitespace-nowrap transition-all ${expanded ? 'ml-2 w-32 p-1 text-gray-300' : 'w-0'}`}
          >
            {text}
          </span>

          {!expanded && (
            <div
              className={`invisible absolute left-full ml-6 translate-x-3 whitespace-nowrap rounded-full bg-teal-700 px-3
              py-2 text-base text-gray-300 opacity-20 transition-all group-hover:visible
              group-hover:translate-x-0 group-hover:opacity-100`}
            >
              {text}
            </div>
          )}
        </li>
      </Link>
    </>
  )
}

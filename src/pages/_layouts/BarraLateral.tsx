import { ArrowLeft, ArrowRight } from 'lucide-react'
import { createContext, ReactNode, useContext, useState } from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

import logo from '../../../public/images/logo.jpeg'

const BarraLateralContext = createContext(false)

interface BarraLateralProps {
  children: ReactNode
}

export default function BarraLateral({ children }: BarraLateralProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <>
      <aside className="h-screen">
        <nav
          className={`flex h-full flex-col border-r bg-gray-100 shadow-sm transition-all ${expanded ? 'w-56' : 'w-16'}`}
        >
          <div className="flex items-center justify-center p-4 pb-2">
            <img
              src={logo}
              alt="logo do dashboard"
              className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`rounded-full bg-teal-500 p-1.5 hover:bg-teal-400 ${expanded ? 'ml-6' : 'ml-0'}`}
            >
              {expanded ? (
                <ArrowLeft color="#000000" size={25} />
              ) : (
                <ArrowRight color="#000000" size={25} />
              )}
            </button>
          </div>

          <BarraLateralContext.Provider value={{ expanded }}>
            <ul className="flex flex-1 flex-col items-center px-3">
              {children}
            </ul>
          </BarraLateralContext.Provider>

          <div
            className={`mb-4 flex flex-row items-center justify-center gap-3 ${expanded ? 'w-full' : 'w-0'}`}
          >
            <FaGithub
              color="rgb(15 118 110)"
              size={25}
              className="cursor-pointer hover:fill-black"
            />
            <FaTwitter
              color="rgb(15 118 110)"
              size={25}
              className="cursor-pointer hover:fill-black"
            />
            <FaDiscord
              color="rgb(15 118 110)"
              size={25}
              className="cursor-pointer hover:fill-black"
            />
            <FaFacebook
              color="rgb(15 118 110)"
              size={25}
              className="cursor-pointer hover:fill-black"
            />
          </div>
        </nav>
      </aside>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export function ItemBarraLateral({
  icon,
  text,
  url,
}: {
  icon: string | JSX.Element
  text: string
  url: string
}) {
  const { expanded } = useContext(BarraLateralContext)

  return (
    <>
      <Link to={url}>
        <li
          className={`group relative my-2 flex cursor-pointer items-center rounded-full
        px-3 py-2 font-medium transition-colors hover:bg-teal-400 ${expanded ? 'w-full' : 'w-12'}`}
        >
          {icon}
          <span
            className={`overflow-hidden transition-all ${expanded ? 'ml-2 w-32 p-1 text-black' : 'w-0'}`}
          >
            {text}
          </span>

          {!expanded && (
            <div
              className={`invisible absolute left-full ml-6 translate-x-3 rounded-full bg-teal-500 px-3 py-2 text-base text-black opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
            >
              {text}
            </div>
          )}
        </li>
      </Link>
    </>
  )
}

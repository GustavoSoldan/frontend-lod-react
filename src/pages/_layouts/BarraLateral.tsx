import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ReactNode, createContext, useContext, useState } from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

import logo from '/images/logo.jpeg'
import perfil from '/images/perfil.jpeg'

const BarraLateralContext = createContext(false)

interface BarraLateralProps {
  children: ReactNode;
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

          <div className="flex border-t-2 p-3">
            <img
              src={perfil}
              alt="foto de perfil do usuário"
              className="h-10 w-10 cursor-pointer rounded-full"
            />
            <div
              className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? 'ml-2 w-52' : 'w-0'} `}
            >
              <div className="leading-4">
                <h4 className="font-semibold text-black">Usuário</h4>
                <span className="text-sm text-gray-600">usuario@gmail.com</span>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export function ItemBarraLateral({ icon, text }: { icon: string | JSX.Element; text: string }){
  const { expanded } = useContext(BarraLateralContext)

  return (
    <li
      className={`group relative my-2 flex cursor-pointer items-center rounded-full
        px-3 py-2 font-medium transition-colors hover:bg-teal-400 ${expanded ? 'w-full' : 'w-12'}`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? 'ml-2 w-48 text-black' : 'w-0'}`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`invisible absolute left-full ml-6 -translate-x-3 rounded-full bg-teal-500 px-3 py-2 text-base text-black opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </li>
  )
}

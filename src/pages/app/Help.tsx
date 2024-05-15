import {
  BadgeCheck,
  Bug,
  CircleUserRound,
  DollarSign,
  Earth,
  Languages,
  LogIn,
  MonitorSmartphone,
  Search,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Help() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div
        className="flex h-36 w-full items-center justify-center bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700
        p-12 text-3xl font-bold shadow-black [text-shadow:3px_3px_1px_var(--tw-shadow-color)]"
      >
        Como podemos te ajudar?
      </div>
      <div className="relative mr-24 mt-10 flex w-3/6 items-center">
        <Link to="/dashboard">
          <button className="mr-4 h-14 rounded-xl bg-teal-600 px-5 font-bold text-white transition-all hover:bg-teal-700">
            Voltar
          </button>
        </Link>

        <div className="relative flex w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500"
            size={24}
          />
          <input
            className="w-full rounded-xl p-5 pl-12 text-black focus:outline-none"
            placeholder="O que procura?"
          />
        </div>
      </div>
      <div className="mt-6 flex w-3/6 flex-wrap items-center justify-center">
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <Languages size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <BadgeCheck size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <MonitorSmartphone size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <DollarSign size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <Earth size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <LogIn size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <CircleUserRound size={40} />
        </div>
        <div className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600">
          <Bug size={40} />
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-72 w-full flex-col items-center justify-center border-b-[6px] border-b-gray-800 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 p-12">
        <div className="text-5xl font-bold shadow-black [text-shadow:3px_4px_1px_var(--tw-shadow-color)]">
          League Of Draaaaaaaaaaaaaaaaven
        </div>
        <div className="flex w-3/6 flex-row justify-between shadow-black [text-shadow:2px_1px_1px_var(--tw-shadow-color)]">
          <div className="mt-8 text-2xl font-bold">
            200M+ de usuários ativos
          </div>
          <div className="mt-8 text-2xl font-bold">
            1B+ de partidas analisadas
          </div>
        </div>
      </div>
      <input
        className="mt-10 flex w-3/6 rounded-xl border-2 border-black p-5 text-black shadow-[4px_4px_1px_rgba(0,0,0,0.9)] focus:outline-none"
        placeholder="Busque o seu nome de invocador"
      />
      <Link to="/dashboard">
        <div
          className="mt-8 rounded-2xl border-4 border-black bg-teal-700 px-6 py-5 text-xl font-bold shadow-black
          transition-all [text-shadow:2px_2px_1px_var(--tw-shadow-color)] hover:bg-teal-600"
        >
          Ir para a Dashboard
        </div>
      </Link>
    </div>
  )
}

import {
  ArrowLeft,
  BadgeCheck,
  Bug,
  DollarSign,
  Earth,
  Languages,
  LogIn,
  MonitorSmartphone,
  Search,
  WifiOff,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Help() {
  const handleClick = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement
    if (modal) {
      modal.showModal()
    }
  }
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div
        className="flex h-32 w-full items-center justify-center border-b-4 border-slate-700 bg-slate-800
        text-xl shadow-black [text-shadow:3px_3px_1px_var(--tw-shadow-color)] md:text-2xl xl:p-12 xl:text-3xl xl:font-bold"
      >
        Como podemos te ajudar?
      </div>

      <div className="relative mt-10 flex w-3/6 flex-col items-center lg:mr-32 lg:flex-row">
        <Link to="/dashboard">
          <button
            className="flex h-14 flex-row items-center gap-2 rounded-xl bg-teal-600 px-5
            font-bold text-white transition-all hover:bg-teal-700 lg:mr-5"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>
        </Link>

        <div className="relative mr-10 mt-6 flex w-full md:mr-0 md:mt-8 lg:mt-0">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500"
            size={24}
          />
          <input
            className="w-screen rounded-xl p-5 pl-12 text-black focus:outline-none lg:w-full"
            placeholder="O que procura?"
          />
        </div>
      </div>

      <div className="w-6/6 mt-6 flex flex-wrap items-center justify-center md:w-4/6 lg:w-3/6">
        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('language')}
          data-testid="abrir-language"
        >
          <Languages size={40} />
        </button>
        <dialog id="language">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              Apenas Português está disponível no momento para linguagem?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Sim, atualmente apenas Português está disponível no momento,
              entretanto, teremos versão em inglês e espanhol em nosso site!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button
                    className="rounded-[8px] bg-slate-950 px-3 py-2"
                    data-testid="fechar-language"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('verified')}
        >
          <BadgeCheck size={40} />
        </button>
        <dialog id="verified">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              Este software é autorizado e oficialidado pela Riot Games?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              No momento, não temos reconhecimento oficial pela Riot Games Inc.
              Entretanto, usamos dados oficiais disponibilizados pela mesma.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button className="rounded-[8px] bg-slate-950 px-3 py-2">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('app')}
        >
          <MonitorSmartphone size={40} />
        </button>
        <dialog id="app">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              Há versões de aplicativos móveis disponíveis do League of Draven?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Ainda não! estamos trabalhando no momento em aperfeiçoar o site,
              trazendo novos recursos e ferramentas para o usuário.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button className="rounded-[8px] bg-slate-950 px-3 py-2">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('payment')}
        >
          <DollarSign size={40} />
        </button>
        <dialog id="payment">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              É necessário utilizar formas de pagamento na utilização do
              software?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Não! League of Draven é totalmente grauito durante o seu uso!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button className="rounded-[8px] bg-slate-950 px-3 py-2">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('region')}
        >
          <Earth size={40} />
        </button>
        <dialog id="region">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              O software abrange todas as regiões disponíveis no League of
              Legends?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Atualmente estamos trabalhando para que essa ferramenta seja
              utilizada, por agora, apenas a região do Brasil está disponível.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button className="rounded-[8px] bg-slate-950 px-3 py-2">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('log-in')}
        >
          <LogIn size={40} />
        </button>
        <dialog id="log-in">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              É necessário estar conectado a uma conta para utilizar?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Para algumas ferramentas de dados é necessário estar vinculado à
              uma conta, entretanto, diversas ferramentas de nosso site estão
              disponíveis para o uso sem a necessidade de estar conectado!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button className="rounded-[8px] bg-slate-950 px-3 py-2">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('wifi')}
        >
          <WifiOff size={40} />
        </button>
        <dialog id="wifi">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">
              É necessário estar conectado a uma rede para utilizar o site?
            </h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Sim, para utilizar e consultar dados em tempo real, é necessário
              estar conectado à alguma rede.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button className="rounded-[8px] bg-slate-950 px-3 py-2">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="m-2.5 bg-teal-500 p-12 transition-all hover:scale-105 hover:bg-teal-600"
          onClick={() => handleClick('bug')}
          data-testid="abrir-bug"
        >
          <Bug size={40} />
        </button>
        <dialog id="bug">
          <div className="max-w-xl bg-slate-800 p-6 text-gray-200">
            <h3 className="text-center text-lg font-bold">Informe algum bug</h3>
            <hr className="my-4 w-full rounded-full border-2 border-slate-950" />
            <p className="py-4 text-center">
              Entre em contato com algum desenvolvedor em{' '}
              <a href="/contato" className="font-bold text-blue-500">
                Contato
              </a>{' '}
              para nos informar alguma ocorrência anormal em nosso site!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex justify-end">
                  <button
                    className="rounded-[8px] bg-slate-950 px-3 py-2"
                    data-testid="fechar-bug"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

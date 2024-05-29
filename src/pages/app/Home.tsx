import { SignInButton, useClerk, UserButton } from '@clerk/clerk-react'
import { ChevronDown, User } from 'lucide-react'
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Home() {
  const { user } = useClerk()
  const userIcon = {
    elements: {
      userButtonAvatarBox: 'w-14 h-14 border-4 border-teal-700',
      userButtonPopoverActionButton: 'text-teal-600',
    },
  }
  return (
    <>
      <div
        className="flex h-[33rem] w-full flex-col border-b-8 border-slate-900
        bg-[url(/images/Draven_Header.jpeg)] bg-cover bg-top"
      >
        <div className="flex h-24 w-full bg-black/50 p-12">
          <div className="flex flex-row items-center justify-start">
            <img
              src={'./images/logo.png'}
              alt="logo do site"
              className="mx-3 h-12 w-16"
            />
            <div className="ml-12 flex gap-2">
              <Link
                to="https://signup.leagueoflegends.com/pt-br/signup/redownload"
                className="group flex flex-col p-3 hover:bg-black/70"
              >
                <div className="flex flex-row items-center">
                  <h2 className="text-lg font-semibold text-gray-200">
                    Download
                  </h2>
                  <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                </div>
                <p className="text-sm font-medium">Baixar LoL</p>
              </Link>

              <Link
                to="https://www.leagueoflegends.com/pt-br/champions/"
                className="group flex flex-col p-3 hover:bg-black/70"
              >
                <div className="flex flex-row items-center">
                  <h2 className="text-lg font-semibold text-gray-200">
                    Campeões
                  </h2>
                  <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                </div>
                <p className="text-sm font-medium">Explorar</p>
              </Link>

              {!user ? (
                <div></div>
              ) : (
                <Link
                  to="/dashboard"
                  className="group flex flex-col p-3 hover:bg-black/70"
                  data-testid="dashboard-button"
                >
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold text-gray-200">
                      Dashboard
                    </h2>
                    <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                  </div>
                  <p className="text-sm font-medium">Gráficos</p>
                </Link>
              )}
            </div>
          </div>

          <div className="ml-auto flex flex-row items-center justify-end gap-2">
            {!user ? (
              <div className="group flex cursor-pointer flex-col p-4 hover:bg-black/70">
                <SignInButton mode="modal" data-testid="sign-in">
                  <div className="flex flex-row items-center gap-1">
                    <User
                      size={28}
                      className="transition-all group-hover:-translate-y-1"
                    />
                    <h2 className="text-lg font-semibold text-gray-200">
                      Entrar
                    </h2>
                  </div>
                </SignInButton>
              </div>
            ) : (
              <div
                className="group flex cursor-pointer flex-row items-center justify-center gap-4 bg-black/70 px-4
                py-3 hover:bg-black/85"
              >
                <span className="text-transform: text-lg font-semibold capitalize">
                  {user?.username}
                </span>
                <UserButton appearance={userIcon} data-testid="user-button" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col p-12">
          <h1 className="text-6xl font-semibold">LEAGUE OF DRAVEN</h1>
          <br />
          <p className="max-w-lg text-justify font-semibold">
            Otimize sua jogabilidade no League of Legends com a nossa visão
            abrangente dos campeões! Descubra estatísticas de campeões, builds,
            guias e muito mais!
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <input
          className="w-[40rem] rounded-xl border-4 border-gray-700 bg-gray-200 p-5 text-black
          transition-all placeholder:font-semibold placeholder:text-gray-800
          focus:shadow-[4px_5px_1px_rgba(107,114,128,0.9)] focus:outline-none"
          placeholder="Busque o seu nome de invocador"
          data-testid="home-input"
        />
      </div>

      <div className="mt-16 flex flex-col items-center justify-center">
        <p className="mb-2 text-lg font-bold text-gray-300">
          Melhores campeões do momento
        </p>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="h-full w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="lg:basis-3/3 md:basis-full">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious data-testid="caroussel-test-1" />
          <CarouselNext data-testid="caroussel-test-2" />
        </Carousel>
      </div>

      <div className="my-16 flex w-full flex-col gap-12 text-justify font-semibold">
        <div className="flex flex-row">
          <p className="flex max-w-3xl bg-teal-900 p-12">
            No mundo dinâmico e competitivo de League of Legends, a informação é
            a chave para o sucesso. Seja você um jogador casual ou um aspirante
            a profissional, entender os detalhes das partidas e as estatísticas
            pode fazer toda a diferença.
          </p>
          <div className="border-r-[70px] border-t-[168px] border-r-transparent border-t-teal-900"></div>
        </div>

        <div className="flex flex-row self-end">
          <div className="border-l-[70px] border-t-[198px] border-l-transparent border-t-teal-900"></div>
          <p className="flex max-w-3xl bg-teal-900 p-12">
            Descubra suas estatísticas pessoais. Com o LoLStatsPro, você pode
            acessar uma análise detalhada do seu desempenho em todas as
            partidas. Veja sua taxa de vitórias, KDA, farm médio por jogo,
            campeões mais jogados e muito mais. Nosso sistema de acompanhamento
            em tempo real garante que você tenha sempre os dados mais recentes
            na ponta dos dedos.
          </p>
        </div>
      </div>

      {!user ? (
        <div></div>
      ) : (
        <div className="mt-8 flex items-center justify-center bg-slate-900 p-8">
          <Link to="/dashboard">
            <div
              className="ml-1 rounded-xl border-4 border-gray-700 bg-slate-800 p-14 text-xl
            font-bold text-gray-300 transition-all hover:bg-gray-900 hover:shadow-[4px_5px_1px_rgba(107,114,128,0.85)]"
            >
              Acesse a Dashboard
            </div>
          </Link>
        </div>
      )}

      <footer className="mt-20 w-full bg-slate-900 p-12">
        <div className="flex w-full flex-row">
          <div className="flex w-5/6">
            <p className="text-center text-xs">
              © 2024 | League of Draven - Nando Company | Riot Games não é
              responsabilizada por League of Draven ou por qualquer
              desenvolvedor envolvido no projeto. League of Legends e Riot Games
              são marcas registradas ou marcas comerciais da Riot Games, Inc.
              League of Legends © Riot Games, Inc.
            </p>
          </div>
          <div className="ml-14 flex flex-row items-center justify-center gap-4">
            <FaGithub
              color="rgb(15 118 110)"
              size={28}
              className="cursor-pointer hover:fill-gray-300"
            />
            <Link to="https://x.com/LigaDoDreivis">
              <FaTwitter
                color="rgb(15 118 110)"
                size={28}
                className="cursor-pointer hover:fill-gray-300"
              />
            </Link>
            <Link to="https://discord.gg/mUCjMJzs">
              <FaDiscord
                color="rgb(15 118 110)"
                size={28}
                className="cursor-pointer hover:fill-gray-300"
              />
            </Link>
            <Link to="https://www.facebook.com/people/League-of-Draven/61560033924018/">
              <FaFacebook
                color="rgb(15 118 110)"
                size={28}
                className="cursor-pointer hover:fill-gray-300"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

import {
  Github,
  Joystick,
  LayoutDashboard,
  MonitorDot,
  Swords,
  User,
} from 'lucide-react'
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
  return (
    <>
      <div
        className="sticky top-0 z-10 flex flex-col items-center
        justify-center bg-slate-800 pt-8"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex w-1/6 justify-center">
            <img
              src={'./images/logo.jpeg'}
              alt="logo da página"
              className="h-16 w-16"
            />
          </div>
          <div className="flex w-3/6 justify-center">
            <input
              className="w-full rounded-xl border-2 border-black bg-gray-200 p-4
              text-black shadow-[4px_4px_1px_rgba(0,0,0,0.9)] focus:outline-none"
              placeholder="Busque o seu nome de invocador"
            />
          </div>
          <div className="w-1/6"></div>
        </div>

        <div className="mt-5 flex w-full">
          <div className="ml-4 flex items-start">
            <Link to="https://signup.leagueoflegends.com/pt-br/signup/redownload?page_referrer=index">
              <div className="flex flex-row gap-2 p-2 text-gray-400 hover:bg-gray-900 hover:text-white">
                <Joystick className="h-6 w-6" /> <p>Baixe LoL agora!</p>
              </div>
            </Link>
            <Link to="https://www.leagueoflegends.com/pt-br/champions/">
              <div className="flex flex-row gap-2 p-2 text-gray-400 hover:bg-gray-900 hover:text-white">
                <Swords className="h-6 w-6" /> <p>Campeões</p>
              </div>
            </Link>
            <Link to="https://lolesports.com/">
              <div className="flex flex-row gap-2 p-2 text-gray-400 hover:bg-gray-900 hover:text-white">
                <MonitorDot className="h-6 w-6" /> <p>E-Sports</p>
              </div>
            </Link>
            <Link to="/dashboard">
              <div className="flex flex-row gap-2 p-2 text-gray-400 hover:bg-gray-900 hover:text-white">
                <LayoutDashboard className="h-6 w-6" /> <p>Dashboard</p>
              </div>
            </Link>
          </div>
          <div className="flex-grow"></div>
          <Link to="/#">
            <div className="flex flex-row gap-2 p-2 text-gray-400 hover:bg-gray-900 hover:text-white">
              <Github className="h-6 w-6" /> <p>Acesse o repositório</p>
            </div>
          </Link>
          <Link to="/login">
            <div className="mr-4 flex flex-row gap-2 p-2 text-gray-400 hover:bg-gray-900 hover:text-white">
              <User className="h-6 w-6" /> <p>Entre Agora</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="mt-8 flex items-center justify-center bg-slate-900 p-8">
        <Link to="/dashboard">
          <div
            className="ml-1 rounded-xl bg-slate-800 p-14 text-xl font-bold text-gray-300
            transition-all hover:bg-teal-900"
          >
            Acesse a Dashboard
          </div>
        </Link>
      </div>

      <footer className="mt-20 w-full bg-slate-900 p-12">
        <div className="flex w-full flex-row">
          <div className="flex w-5/6">
            <p className="text-center text-xs">
              © 2024 | League of Draven - Nando Company | Riot Games não é
              responsabilizada por League Of Draven ou por qualquer
              desenvolvedor envolvido no projeto. League of Legends e Riot Games
              são marcas registradas ou marcas comerciais da Riot Games, Inc.
              League of Legends © Riot Games, Inc.
            </p>
          </div>
          <div className="ml-14 flex flex-row items-center justify-center gap-4">
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
        </div>
      </footer>
    </>
  )
}

import { SignInButton, useClerk, UserButton } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { ChevronDown, Menu, Search, User } from 'lucide-react'
import { KeyboardEvent, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { getSummonerByName } from '@/api/get-summoner-by-name'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const getSummonerByNameSchema = z.object({
  gameName: z.string().min(1, { message: 'Informe seu nome de usuário' }),
  tagLine: z.string().min(1, { message: 'Informe sua TagLine' }),
})

type GetSummonerByNameForm = z.infer<typeof getSummonerByNameSchema>

export function Home() {
  const form = useForm<GetSummonerByNameForm>({
    resolver: zodResolver(getSummonerByNameSchema),
    mode: 'onSubmit',
    defaultValues: {
      gameName: '',
      tagLine: '',
    },
  })

  const { user } = useClerk()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const userIcon = {
    elements: {
      userButtonAvatarBox: 'w-14 h-14 border-4 border-teal-700',
      userButtonPopoverActionButton: 'text-teal-600',
    },
  }

  const [showInput, setShowInput] = useState(false)

  const handleButtonClick = () => {
    setShowInput(true)
  }

  const handleInputBlur = () => {
    setShowInput(false)
  }

  const onSubmit = async (data: GetSummonerByNameForm) => {
    try {
      const summonerInfo = await getSummonerByName(data)

      queryClient.setQueryData(['summonerinfo'], summonerInfo)

      navigate('/dashboard', { state: { summonerInfo } })
    } catch (error) {
      toast.error('Usuário não encontrado')
    }
  }

  const handleGameNameKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const gameName = form.getValues('gameName')
      if (gameName && !gameName.includes('#')) {
        const updatedGameName = `${gameName}#`
        form.setValue('gameName', updatedGameName)
      }
      const parts = gameName.split('#')
      if (parts.length > 1) {
        form.setValue('tagLine', parts[1])
      }
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const inputValue = form.getValues('gameName')
      const [gameName, tagLine] = inputValue
        .split('#')
        .map((value) => value.trim())
      onSubmit({ gameName, tagLine })
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Helmet title="Home" />
      <div
        className="flex h-[33rem] w-full flex-col border-b-4 border-slate-900 
        bg-[url(/images/ruined-draven.jpg)] bg-cover bg-top"
      >
        <div className="flex h-24 w-full bg-black/40 p-3 lg:p-12">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start">
              <img
                src={'./images/logo.png'}
                alt="logo do site"
                className="h-12 w-16 lg:mx-3"
              />

              <div className="ml-12 hidden gap-2 md:flex">
                <Link
                  to="https://signup.leagueoflegends.com/pt-br/signup/redownload"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded p-3 hover:bg-black/80"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded p-3 hover:bg-black/70"
                >
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold text-gray-200">
                      Campeões
                    </h2>
                    <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                  </div>
                  <p className="text-sm font-medium">Explorar</p>
                </Link>

                <Link
                  to="https://www.riotgames.com/pt-br/not%C3%ADcias/agora-teremos-transmissno-riot-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded p-3 hover:bg-black/70"
                >
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold text-gray-200">
                      Riot Mobile
                    </h2>
                    <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                  </div>
                  <p className="text-sm font-medium">Aventure-se</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <div className="hidden w-full lg:flex">
                {!showInput && (
                  <Button
                    variant="ghost"
                    className="rounded bg-black/80 p-4"
                    onClick={handleButtonClick}
                  >
                    <Search className="h-6 w-6" />
                  </Button>
                )}
                {showInput && (
                  <Input
                    type="text"
                    onBlur={handleInputBlur}
                    placeholder="Digite sua pesquisa aqui..."
                    className="w-[18rem] rounded border border-gray-300 p-2"
                  />
                )}
              </div>

              {!user ? (
                <div className="group hidden cursor-pointer flex-col p-4 hover:bg-black/80 md:flex">
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
                <div className="group hidden cursor-pointer flex-row items-center justify-center gap-4 rounded bg-black/80 px-3 py-2 hover:bg-black/85 md:flex">
                  <span className="text-transform: text-lg font-semibold capitalize">
                    {user?.username}
                  </span>
                  <UserButton appearance={userIcon} data-testid="user-button" />
                </div>
              )}

              <div className="p-3 md:hidden">
                <button onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <Menu size={50} className="bg-black/90 p-3 text-gray-200" />
                  ) : (
                    <Menu size={50} className="bg-black/90 p-3 text-gray-200" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="z-10 mt-2 flex h-[21rem] w-full flex-col items-start justify-center gap-2 rounded-2xl bg-black/95 p-4 md:hidden">
              <Link
                to="https://signup.leagueoflegends.com/pt-br/signup/redownload"
                className="group flex flex-col p-3"
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
                className="group flex flex-col p-3"
              >
                <div className="flex flex-row items-center">
                  <h2 className="text-lg font-semibold text-gray-200">
                    Campeões
                  </h2>
                  <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                </div>
                <p className="text-sm font-medium">Explorar</p>
              </Link>
              {user && (
                <Link to="/dashboard" className="group flex flex-col p-3">
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold text-gray-200">
                      Dashboard
                    </h2>
                    <ChevronDown className="transition duration-500 group-hover:translate-y-4 group-hover:-rotate-90" />
                  </div>
                  <p className="text-sm font-medium">Gráficos</p>
                </Link>
              )}

              {!user ? (
                <div className="group flex cursor-pointer flex-col p-4">
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
                <div className="group flex cursor-pointer flex-row items-center justify-center gap-4 px-3 py-2">
                  <span className="text-transform: text-lg font-semibold capitalize">
                    {user?.username}
                  </span>
                  <UserButton appearance={userIcon} data-testid="user-button" />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col p-2 md:p-12">
          <div
            className="flex flex-row self-center font-league-spartan text-5xl font-semibold 
            text-teal-600 drop-shadow-[-4px_4px_1px_rgba(0,0,0,1)] md:text-6xl lg:self-start lg:text-7xl"
          >
            <h1 className="mr-4 text-gray-200">League Of</h1>
            <h1>Draven</h1>
          </div>

          <br />
          <p
            className="max-w-72 text-justify font-semibold text-gray-200 drop-shadow-[-2px_3px_1px_rgba(0,0,0,1)]
            md:max-w-lg md:text-lg lg:max-w-lg lg:text-xl xl:text-base"
          >
            Otimize sua jogabilidade no League of Legends com a nossa visão
            abrangente dos campeões! Descubra estatísticas de campeões, builds,
            guias e muito mais!
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-4"
          >
            <div>
              <FormField
                control={form.control}
                name="gameName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        className="w-[20rem] rounded-xl border-4 border-gray-700 bg-gray-200 p-5 text-black drop-shadow-[3px_4px_1px_rgba(0,0,0,1)]
                        transition-all placeholder:font-semibold placeholder:text-gray-800
                        focus:shadow-[4px_5px_1px_rgba(107,114,128,0.9)] focus:outline-none md:w-[40rem]"
                        placeholder="Busque o seu nome de invocador: (Ex:Invocador#3333)"
                        onKeyDown={handleGameNameKeyDown}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>

      <div className="my-12 flex w-full flex-col gap-12 text-justify font-semibold">
        <div className="mx-4 flex flex-col gap-8 text-sm lg:text-base ">
          <p
            className="flex max-w-3xl rounded border-2 border-gray-300/20 bg-teal-700/50 p-8 
            drop-shadow-[-5px_6px_1px_rgba(0,0,0,1)] transition-all hover:shadow-[-5px_6px_1px_rgba(107,114,128,0.9)]"
          >
            No mundo dinâmico e competitivo de League of Legends, a informação é
            a chave para o sucesso. Seja você um jogador casual ou um aspirante
            a profissional, entender os detalhes das partidas e as estatísticas
            pode fazer toda a diferença.
          </p>
          <p
            className="flex max-w-3xl self-end rounded border-2 border-gray-300/20 bg-teal-700/50
            p-8 drop-shadow-[5px_6px_1px_rgba(0,0,0,1)] transition-all hover:shadow-[5px_6px_1px_rgba(107,114,128,0.9)]"
          >
            Descubra suas estatísticas pessoais. Com o LoLStatsPro, você pode
            acessar uma análise detalhada do seu desempenho em todas as
            partidas. Veja sua taxa de vitórias, KDA, farm médio por jogo,
            campeões mais jogados e muito mais. Nosso sistema de acompanhamento
            em tempo real garante que você tenha sempre os dados mais recentes
            na ponta dos dedos.
          </p>
        </div>
      </div>

      <footer
        className="mt-20 flex w-full flex-col items-center justify-center border-t-2 border-black bg-slate-900 p-12 md:flex-row md:flex-wrap"
        data-testid="footer"
      >
        <div className="flex w-full justify-center p-4 md:w-2/3 md:justify-start">
          <p className="text-center text-xs md:text-justify lg:text-center">
            © 2024 | League of Draven - Nando Company | Riot Games não é
            responsabilizada por League of Draven ou por qualquer desenvolvedor
            envolvido no projeto. League of Legends e Riot Games são marcas
            registradas ou marcas comerciais da Riot Games, Inc. League of
            Legends © Riot Games, Inc.
          </p>
        </div>
        <div className="mt-5 flex flex-row items-center justify-center gap-4 md:ml-14 md:mt-0">
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
      </footer>
    </>
  )
}

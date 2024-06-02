import { SignInButton, useClerk, UserButton } from '@clerk/clerk-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { ChevronDown, Search, User } from 'lucide-react'
import { KeyboardEvent, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { getSummonerByName } from '@/api/get-summoner-by-name'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
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
      console.log('summ', summonerInfo)

      navigate('/dashboard', { state: { summonerInfo } })
    } catch (error) {
      console.error('Erro ao obter informações do invocador:', error)
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
  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-[33rem] w-full flex-col bg-[url(/images/ruined-draven.jpg)] bg-cover bg-top">
        <div className="flex h-24 w-full bg-black/40 p-12">
          <div className="flex flex-row items-center justify-start">
            <img
              src={'./images/logo.png'}
              alt="logo do site"
              className="mx-3 h-12 w-16"
            />
            <div className="ml-12 flex gap-2">
              <Link
                to="https://signup.leagueoflegends.com/pt-br/signup/redownload"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded p-3 hover:bg-black/70"
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
              {user && (
                <Link
                  to="/dashboard"
                  className="group flex flex-col rounded p-3 hover:bg-black/70"
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
          </div>

          <div className="ml-auto flex flex-row items-center justify-end gap-2">
            <div className="w-full">
              {!showInput && (
                <Button
                  variant="ghost"
                  className="rounded p-4 hover:bg-black/70"
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
              <div className="group flex cursor-pointer flex-col rounded p-4 hover:bg-black/70">
                <SignInButton mode="modal">
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
              <div className="group flex cursor-pointer flex-col rounded px-4 py-3 hover:bg-black/70">
                <UserButton appearance={userIcon} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col p-12">
          <h1 className="font-league-spartan text-6xl">League Of Draven</h1>
          <br />
          <p className="max-w-72 text-justify font-semibold md:max-w-lg md:text-lg lg:max-w-lg lg:text-xl xl:text-base">
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
                        className="w-[40rem] rounded-xl border-4 border-gray-700 bg-gray-200 p-5 text-black
                        transition-all placeholder:font-semibold placeholder:text-gray-800
                        focus:shadow-[4px_5px_1px_rgba(107,114,128,0.9)] focus:outline-none"
                        placeholder="Busque o seu nome de invocador"
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

      {/* <input
              className="w-[40rem] rounded-xl border-4 border-gray-700 bg-gray-200 p-5 text-black
          transition-all placeholder:font-semibold placeholder:text-gray-800
          focus:shadow-[4px_5px_1px_rgba(107,114,128,0.9)] focus:outline-none"
              placeholder="Busque o seu nome de invocador"
            /> */}
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* 
      {!user ? (
        <div></div>
      ) : (
        <div className="mt-8 flex items-center justify-center bg-teal-950 p-8">
          <Link to="/dashboard">
            <div
              className="ml-1 rounded-xl border-4 border-gray-700 bg-cyan-950 p-14 text-xl
            font-bold text-gray-300 transition-all hover:bg-gray-900 hover:shadow-[4px_5px_1px_rgba(107,114,128,0.85)]"
            >
              Acesse a Dashboard
            </div>
          </Link>
        </div>
      )} */}

      <footer
        className="mt-20 flex w-full flex-col items-center justify-center bg-slate-900 p-12 md:flex-row"
        data-testid="footer"
      >
        <div className="flex w-5/6">
          <p className="text-justify text-xs lg:text-center">
            © 2024 | League of Draven - Nando Company | Riot Games não é
            responsabilizada por League of Draven ou por qualquer desenvolvedor
            envolvido no projeto. League of Legends e Riot Games são marcas
            registradas ou marcas comerciais da Riot Games, Inc. League of
            Legends © Riot Games, Inc.
          </p>
        </div>
        <div className="mt-5 flex flex-row items-center justify-center gap-4 md:ml-14">
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

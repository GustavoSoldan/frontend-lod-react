import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface MatchBubbleProps {
  kills: number
  deaths: number
  assists: number
  farm: number
  gold: number
  gamemode: string
  role: string
  matchDate: string
  championImage: string
  win: boolean
  onClick: () => void
}

export function MatchBubble({
  kills,
  deaths,
  assists,
  farm,
  gold,
  gamemode,
  role,
  matchDate,
  championImage,
  win,
  onClick,
}: MatchBubbleProps) {
  return (
    <div
      className="flex items-start gap-2.5 rounded-lg bg-slate-900 bg-opacity-40 px-4 py-2"
      onClick={onClick}
    >
      <div className="leading-1.5 flex w-full flex-col border border-gray-500 p-4">
        <div className="flex flex-row items-center justify-center">
          <Avatar className="h-[74px] w-[74px] border border-4 border-teal-700">
            <AvatarImage src={championImage} />
            <AvatarFallback>ChampionImage</AvatarFallback>
          </Avatar>
          <div className=" flex w-[87rem] flex-row items-center justify-between pl-4 font-league-spartan text-lg">
            <p>{win ? 'Vitoria' : 'Derrota'}</p>
            <p className="text-lg">
              KDA: {kills} / {deaths} / {assists}{' '}
            </p>
            <p className="text-lg">Farm: {farm}</p>
            <p className="text-lg">Gold: {gold}</p>
            <p className="text-lg capitalize">{gamemode}</p>
            <p className="text-lg capitalize">{role}</p>
            <p className="text-center text-base">Data: {matchDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

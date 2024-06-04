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
  onClick,
}: MatchBubbleProps) {
  return (
    <div
      className="flex items-start gap-2.5 rounded-lg bg-slate-900 bg-opacity-40 p-1"
      onClick={onClick}
    >
      <div className="leading-1.5 flex w-full flex-col rounded-lg border border-gray-500 p-4">
        <div className="flex flex-row">
          <Avatar className="h-[75px] w-[75px] overflow-hidden border border-4 border-teal-700">
            <AvatarImage src={championImage} />
            <AvatarFallback>ChampionImage</AvatarFallback>
          </Avatar>
          <div className="grid grid-cols-6 grid-rows-1 pl-2 pt-4 font-league-spartan text-lg">
            <h1 className="text-lg">
              Kda: {kills} / {deaths} / {assists}{' '}
            </h1>
            <p className="text-lg">Farm: {farm}</p>
            <p>Tempo:{matchDate}</p>
            <p className="text-lg">Gold: {gold}</p>
            <p className="text-lg capitalize">{gamemode}</p>
            <p className="text-lg capitalize">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

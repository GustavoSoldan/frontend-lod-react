import { Player } from './player'

export interface UserPlayer {
  userName: string
  matchDate: Date
  matchDuration: string
  wonMatch: boolean
  players: Player[]
}

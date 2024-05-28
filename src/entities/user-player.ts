import { Player } from './player'

export interface userPlayer {
  userName: string
  matchDate: Date
  matchDuration: string
  wonMatch: boolean
  players: Player[]
}

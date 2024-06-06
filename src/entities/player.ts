import { Item } from './item'

export interface Player {
  championName: string
  wonMatch: boolean
  userName: string
  farm: number
  goldEarned: number
  goldSpent: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageTaken: number
  totalHeal: number
  visionScore: number
  wardsPlaced: number
  wardsKilled: number
  deaths: number
  kills: number
  lane: string
  role: string
  championImageURL: string
  items: Item[]
}

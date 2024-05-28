import { Item } from './item'

export interface Player {
  championName: string
  userName: string
  farm: number
  goldEarned: number
  goldSpent: number
  championImageURL: string
  items: Item[]
}

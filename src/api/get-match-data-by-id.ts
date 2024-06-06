import { Player } from '@/entities/player'
import { api } from '@/lib/axios'

export interface GetMatchDataByIdRequest {
  matchId: string
}

export interface GetMatchDataByIdResponse {
  userName: string
  matchDate: Date
  matchDuration: string
  players: Player[]
}

export async function getMatchDataById({ matchId }: GetMatchDataByIdRequest) {
  try {
    const response = await api.get<GetMatchDataByIdResponse>(
      `/api/Matchs/GetMatch/${matchId}`,
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('erro')
  }
}

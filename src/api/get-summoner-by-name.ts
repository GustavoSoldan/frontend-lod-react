import { api } from '@/lib/axios'

export interface GetSummonerByNameRequest {
  gameName: string
  tagLine: string
}

interface GetSummonerByNameResponse {
  puuid: string
  gameName: string
  tagLine: string
}

export async function getSummonerByName({
  gameName,
  tagLine,
}: GetSummonerByNameRequest) {
  try {
    const response = await api.get<GetSummonerByNameResponse>(
      `/api/Summoner/GetSummonerByName/${gameName}/${tagLine}`,
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('erro')
  }
}

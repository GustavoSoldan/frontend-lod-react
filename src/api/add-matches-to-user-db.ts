import { api } from '@/lib/axios'

export interface AddMatchesDataBaseRequest {
  gameName: string
  tagLine: string
}

interface AddMatchesDataBaseResponse {
  response: string
}

export async function addMatchesDataBase({
  gameName,
  tagLine,
}: AddMatchesDataBaseRequest) {
  try {
    const response = await api.get<AddMatchesDataBaseResponse>(
      `/api/Summoner/AddMatchesDataBase/${gameName}/${tagLine}`,
    )

    return response
  } catch (error) {
    console.error(error)
    throw new Error('erro')
  }
}

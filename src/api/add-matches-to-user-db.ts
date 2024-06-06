import { toast } from 'sonner'

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
    toast.success('Dados adicionados ao banco com sucesso')

    return response
  } catch (error) {
    toast.error('Limite de requisições atingindo, tente novamente mais tarde')
  }
}

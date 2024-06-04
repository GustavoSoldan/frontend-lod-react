import {
  LatestMatchesKillsDeaths,
  SummonerMastery,
  SummonerRanked,
} from '@/entities/summoner'
import { api } from '@/lib/axios'

export interface GetSummonerDashboardRequest {
  puuid: string
}

export interface GetSummmonerDashboardResponse {
  backgroundImage: string
  mostPlayedChampion: string
  mostPlayedChampionCount: number
  username: string
  summonerLevel: number
  totalKills: number
  totalDeath: number
  totalDamage: number
  totalDamageChampions: number
  totalDamageTaken: number
  totalGoldEarned: number
  summonerRankedDTO: SummonerRanked
  summonerMasteryDTO: SummonerMastery
  latestMatchesKillsDeathsDTO: LatestMatchesKillsDeaths[]
}

export async function getSummonerDashboard({
  puuid,
}: GetSummonerDashboardRequest) {
  try {
    const response = await api.get<GetSummmonerDashboardResponse>(
      `/api/Summoner/GetSummonerDashboard/${puuid}`,
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('erro')
  }
}

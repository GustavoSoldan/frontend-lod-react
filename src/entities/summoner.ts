export interface SummonerRanked {
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
}

export interface SummonerMastery {
  championName: string
  championImage: string
  championLevel: number
  championPoints: number
}

export interface Summoner {
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
}

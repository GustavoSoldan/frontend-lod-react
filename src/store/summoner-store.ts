import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { Summoner } from '@/entities/summoner'

interface SummonerStore {
  summoner: Summoner | null
  setSummoner: (summoner: Summoner) => void
  reset: () => void
}

export const useSummonerStore = create<SummonerStore>()(
  devtools(
    persist(
      (set) => ({
        summoner: null,
        setSummoner: (newSummoner: Summoner | null) => {
          set({ summoner: newSummoner })
        },
        reset: () => set({ summoner: null }),
      }),
      { name: 'summonerStore' },
    ),
  ),
)

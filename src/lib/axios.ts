import axios from 'axios'

import { Env } from '@/env'

export const api = axios.create({
  baseURL: Env.VITE_API_URL,
})

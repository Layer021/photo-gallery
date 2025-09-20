import axios from 'axios'

export const API_BASE_URL = {
  SERVER: process.env.SERVER_API_URL!,
  CLIENT: process.env.NEXT_PUBLIC_API_URL!,
} as const

export const serverApiClient = axios.create({
  baseURL: API_BASE_URL.SERVER,
})

export const clientApiClient = axios.create({
  baseURL: API_BASE_URL.CLIENT,
})

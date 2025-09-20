import axios from 'axios'

export const serverApiClient = axios.create({
  baseURL: process.env.SERVER_API_URL,
})

export const clientApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

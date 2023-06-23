import { createContext } from 'react'

interface Context {
  order: string
  setOrder: (newOrder: string) => void
}

export const MainContext = createContext<Context | null>(null)

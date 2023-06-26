import { createContext } from "react"

interface Context {
  order: number
  setOrder: (newOrder: number) => void
}

export const MainContext = createContext<Context | null>(null)

import { createContext } from 'react'


function noop() {}

export const AuhtContext = createContext({
   token: null,
   userId: null,
   login: noop,
   logout: noop,
   isAuht: false
})
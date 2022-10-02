import React, { createContext, FC, PropsWithChildren, useState } from 'react'

type AuthContextType = {
  loggedIn: boolean
  signIn: () => void
  signOut: () => void
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const initialValues: AuthContextType = {
    loggedIn,
    signIn: () => {
      setLoggedIn(true)
    },
    signOut: () => {
      setLoggedIn(false)
    },
  }

  return <AuthContext.Provider value={initialValues}>{children}</AuthContext.Provider>
}

export default AuthContext

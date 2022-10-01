import React, { createContext, FC, PropsWithChildren, useState } from 'react'

type AuthContextType = {
  loading: boolean
  setLoading: (value: boolean) => void
  loggedIn: boolean
  signIn: (token: string) => void
  signOut: () => void
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const initialValues: AuthContextType = {
    loading,
    setLoading: (value) => setLoading(value),
    loggedIn,
    signIn: () => {
      setLoading(false)
      setLoggedIn(true)
    },
    signOut: () => {
      setLoggedIn(false)
    },
  }

  return <AuthContext.Provider value={initialValues}>{children}</AuthContext.Provider>
}

export default AuthContext

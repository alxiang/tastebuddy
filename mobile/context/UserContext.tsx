import React, { createContext, FC, useState, PropsWithChildren } from 'react'
import type { User } from '../types'

type UserContextType = { user: User; setUser: (user: User) => void }
const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserContext

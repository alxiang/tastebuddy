import React, { createContext, FC, useState, PropsWithChildren } from 'react'
import type { UUID } from '../types'

type OrderContextType = { orderId: UUID; setOrderId: (orderId: UUID) => void }
const OrderContext = createContext<OrderContextType>({} as OrderContextType)

export const OrderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [orderId, setOrderId] = useState<UUID>('')

  return <OrderContext.Provider value={{ orderId, setOrderId }}>{children}</OrderContext.Provider>
}

export default OrderContext

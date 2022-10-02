import React, { createContext, FC, useState, PropsWithChildren } from 'react'
import type { Order } from '../types'

type CartContextType = { cart: Order; setCart: (cart: Order) => void; clearCart: () => void }
const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<Order>({ items: [], subtotal: 0 } as Order)
  const clearCart = () => setCart({ items: [], subtotal: 0 })

  return <CartContext.Provider value={{ cart, setCart, clearCart }}>{children}</CartContext.Provider>
}

export default CartContext

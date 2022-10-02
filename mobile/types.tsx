import { FlexStyle, ViewProps } from 'react-native'

export type User = {
  id: number
  email: string
}

export type FoodOrder = {
  foodId: UUID
  name: string
  price: number
  specialRequests: string
}

export type Order = {
  items: FoodOrder[]
  subtotal: number
}

export type UUID = string

export type ContainerStyle = ViewProps & FlexStyle

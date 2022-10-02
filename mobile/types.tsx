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

export type Menu = {
  id: UUID
  menu_type: string
  restaurant_id: UUID 
}

export type Order = {
  items: FoodOrder[]
  subtotal: number
}

export type Food = {
  id: UUID
  name: string
  description: string
  ingredients: string[]
  price: number
  special_notes: string[]
  restaurant_id: UUID
  section: string
}

export type UUID = string

export type ContainerStyle = ViewProps & FlexStyle

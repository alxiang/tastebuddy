import { UUID } from '../types'

export type LoggedOutStackParamList = {
  Login: undefined
}

export type LoggedInStackParamList = {
  Menu: undefined
  Cart: undefined
  Payment: { setOrderId: (orderId: UUID) => void }
  Review: undefined
  UserProfile: undefined
  TasteProfile: undefined
}

import { FlexStyle, ViewProps } from 'react-native'

export type User = {
  id: number
  email: string
}

export type ContainerStyle = ViewProps & FlexStyle

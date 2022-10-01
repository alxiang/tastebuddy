import React, { FC } from 'react'
import { View, Text } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import { LoggedOutStackParamList } from '../navigation/NavigationTypes'

const LoginScreen: FC<StackScreenProps<LoggedOutStackParamList>> = () => (
  <View>
    <Text>Login Screen</Text>
  </View>
)

export default LoginScreen

import React, { FC } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { LoggedOutStackParamList } from '../navigation/NavigationTypes'
import { Button } from '../components/building-blocks'
import SafeAreaView from '../components/SafeAreaView'

const LoginScreen: FC<StackScreenProps<LoggedOutStackParamList>> = () => (
  <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Sign In" />
  </SafeAreaView>
)

export default LoginScreen

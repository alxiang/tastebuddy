import React from 'react'
import { LoggedOutStackParamList } from './NavigationTypes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator<LoggedOutStackParamList>()

function LoggedOutStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default LoggedOutStackNavigator

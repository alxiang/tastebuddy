import React from 'react'
import { LoggedInStackParamList } from './NavigationTypes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen'

const Stack = createNativeStackNavigator<LoggedInStackParamList>()

function LoggedInStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  )
}

export default LoggedInStackNavigator

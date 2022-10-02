import React from 'react'
import { LoggedInStackParamList } from './NavigationTypes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen'
import UserProfileScreen from '../screens/UserProfileScreen'
import BackButton from '../components/navigation/BackButton'
import HeaderTitle from '../components/navigation/HeaderTitle'
import Colors from '../constants/Colors'
import ProfileButton from '../components/navigation/ProfileButton'
import CartScreen from '../screens/CartScreen'
import ReviewScreen from '../screens/ReviewScreen'

const Stack = createNativeStackNavigator<LoggedInStackParamList>()

function LoggedInStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={({ navigation }) => ({
        headerLeft: ({ canGoBack }) => canGoBack && <BackButton onPress={() => navigation.goBack()} />,
        headerRight: () => <ProfileButton onPress={() => navigation.navigate('UserProfile')} />,
        headerStyle: { backgroundColor: Colors.white },
        headerTitle: () => <HeaderTitle />,
      })}
    >
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ headerRight: () => null }} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  )
}

export default LoggedInStackNavigator

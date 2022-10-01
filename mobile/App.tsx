import { NavigationContainer } from '@react-navigation/native'
import React, { FC, useContext } from 'react'
import { UserProvider } from './context/UserContext'
import LoggedOutStackNavigator from './navigation/LoggedOutStackNavigator'
import LoggedInStackNavigator from './navigation/LoggedInStackNavigator'
import { useFonts } from 'expo-font'
import AuthContext, { AuthProvider } from './context/AuthContext'
import SplashScreen from './screens/SplashScreen'

function App() {
  const { loading: loadingProfile, loggedIn } = useContext(AuthContext)

  if (loadingProfile) {
    return <SplashScreen />
  }

  const loggedInRoot = (
    <UserProvider>
      <LoggedInStackNavigator />
    </UserProvider>
  )
  const loggedOutRoot = <LoggedOutStackNavigator />

  return <NavigationContainer>{loggedIn ? loggedInRoot : loggedOutRoot}</NavigationContainer>
}

const AppContainer: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  })

  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default AppContainer

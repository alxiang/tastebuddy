import { NavigationContainer } from '@react-navigation/native'
import React, { FC, useContext } from 'react'
import { UserProvider } from './context/UserContext'
import LoggedOutStackNavigator from './navigation/LoggedOutStackNavigator'
import LoggedInStackNavigator from './navigation/LoggedInStackNavigator'
import { useFonts } from 'expo-font'
import AuthContext, { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { OrderProvider } from './context/OrderContext'

function App() {
  const { loggedIn } = useContext(AuthContext)

  const loggedInRoot = (
    <CartProvider>
      <OrderProvider>
        <LoggedInStackNavigator />
      </OrderProvider>
    </CartProvider>
  )
  const loggedOutRoot = <LoggedOutStackNavigator />

  return <NavigationContainer>{loggedIn ? loggedInRoot : loggedOutRoot}</NavigationContainer>
}

const AppContainer: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })

  // TODO: Splash screen
  if (!fontsLoaded) {
    return null
  }

  return (
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  )
}

export default AppContainer

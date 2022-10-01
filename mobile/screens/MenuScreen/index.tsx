import React, { FC } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { LoggedInStackParamList } from '../../navigation/NavigationTypes'
import SafeAreaView from '../../components/SafeAreaView'
import Header from './Header'
import Colors from '../../constants/colors'
import { StyleSheet, View } from 'react-native'
import Footer from './Footer'
import Menu from './Menu'

const MenuScreen: FC<StackScreenProps<LoggedInStackParamList>> = () => {
  const hr = <View style={styles.hr} />

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        {hr}
        <Menu />
        {hr}
        <Footer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
  },
  hr: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
})

export default MenuScreen

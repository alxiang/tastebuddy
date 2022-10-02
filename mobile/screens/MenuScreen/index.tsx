import React, { FC } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { LoggedInStackParamList } from '../../navigation/NavigationTypes'
import SafeAreaView from '../../components/SafeAreaView'
import Header from './Header'
import Colors from '../../constants/Colors'
import { StyleSheet, View } from 'react-native'
import Footer from './Footer'
import Menu from './Menu'

const MenuScreen: FC<StackScreenProps<LoggedInStackParamList>> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Menu />
        <Footer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  hr: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
})

export default MenuScreen

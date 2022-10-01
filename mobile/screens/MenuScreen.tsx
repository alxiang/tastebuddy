import React, { FC } from 'react'
import { View, Text } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import { LoggedInStackParamList } from '../navigation/NavigationTypes'

const MenuScreen: FC<StackScreenProps<LoggedInStackParamList>> = () => (
  <View>
    <Text>Menu Screen</Text>
  </View>
)

export default MenuScreen

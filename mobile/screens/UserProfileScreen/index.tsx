import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Text } from '../../components/building-blocks'
import SafeAreaView from '../../components/SafeAreaView'
import { LoggedInStackParamList } from '../../navigation/NavigationTypes'

const UserProfile: FC<StackScreenProps<LoggedInStackParamList>> = () => {
  return (
    <SafeAreaView>
      <Text value="UserProfile" />
    </SafeAreaView>
  )
}

export default UserProfile

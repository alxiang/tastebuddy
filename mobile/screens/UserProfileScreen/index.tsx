import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useContext } from 'react'
import { Button, Text } from '../../components/building-blocks'
import SafeAreaView from '../../components/SafeAreaView'
import AuthContext from '../../context/AuthContext'
import { LoggedInStackParamList } from '../../navigation/NavigationTypes'
import { StyleSheet, View } from 'react-native'
import UserContext from '../../context/UserContext'

const UserProfile: FC<StackScreenProps<LoggedInStackParamList>> = () => {
  const { user } = useContext(UserContext)
  const { signOut } = useContext(AuthContext)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text value={user.email} style={styles.email} />
        <Button onPress={signOut} title="Sign out" containerStyle={styles.signOutButton} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  email: {
    fontSize: 20,
  },
  signOutButton: {
    marginTop: 'auto',
    width: 100,
  },
})

export default UserProfile

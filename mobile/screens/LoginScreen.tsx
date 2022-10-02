import React, { FC, useContext, useState } from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { LoggedOutStackParamList } from '../navigation/NavigationTypes'
import { Text, Button, TextInput } from '../components/building-blocks'
import SafeAreaView from '../components/SafeAreaView'
import AuthContext from '../context/AuthContext'
import { StyleSheet } from 'react-native'
import tasteBuddy from '../api/tasteBuddyApi'
import UserContext from '../context/UserContext'
import Colors from '../constants/Colors'

const LoginScreen: FC<StackScreenProps<LoggedOutStackParamList>> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setUser } = useContext(UserContext)
  const { signIn } = useContext(AuthContext)

  const createUser = async () => {
    tasteBuddy
      .post('signup/', { email, password })
      .then((res) => {
        setUser(res.data)
        setError('')
        signIn()

        return res
      })
      .catch(() => {
        setError('Something went wrong')
      })
  }

  const login = async () => {
    if (email === '' || password === '') {
      setError('Please enter an email and password')
      return
    }

    tasteBuddy
      .post('login/', { email, password })
      .then((res) => {
        setUser(res.data)
        setError('')
        signIn()

        return res
      })
      .catch(() => {
        createUser()
      })
  }

  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        label="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button title="Sign In" containerStyle={styles.submitButton} onPress={login} />
      {error ? <Text value={error} style={styles.error} /> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 10,
  },
  error: {
    marginTop: 10,
    color: Colors.errorRed,
  },
})

export default LoginScreen

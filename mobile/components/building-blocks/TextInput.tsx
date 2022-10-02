import React, { FC } from 'react'
import { View, StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native'
import Colors from '../../constants/Colors'
import Text from './Text'

type TextInputProps = {
  label?: string
} & Pick<
  RNTextInputProps,
  'placeholder' | 'value' | 'onChangeText' | 'autoCorrect' | 'autoCapitalize' | 'style' | 'secureTextEntry'
>

const TextInput: FC<TextInputProps> = ({ label, style, ...props }) => {
  return (
    <View style={styles.container}>
      <Text value={label || ''} style={styles.text} />
      <RNTextInput {...props} style={[styles.input, style]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
})

export default TextInput

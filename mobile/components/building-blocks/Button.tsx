import React, { FC } from 'react'
import { PressableProps, ButtonProps as RNButtonProps, StyleSheet, TextProps } from 'react-native'
import Colors from '../../constants/Colors'
import Text from './Text'
import Pressable from './Pressable'
import { ContainerStyle } from '../../types'

type ButtonProps = { containerStyle?: ContainerStyle; textStyle?: TextProps } & Pick<PressableProps, 'onPress'> &
  Pick<RNButtonProps, 'title'>

const Button: FC<ButtonProps> = ({ containerStyle, onPress, title, textStyle }) => {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <Text value={title} style={textStyle} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.brown,
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '300',
    color: Colors.brown,
  },
})

export default Button

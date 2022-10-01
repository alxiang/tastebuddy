import React, { FC } from 'react'
import { Pressable, PressableProps, ButtonProps as RNButtonProps, StyleSheet, ViewProps, TextProps } from 'react-native'
import Colors from '../../constants/Colors'
import Text from './Text'

type ButtonProps = { containerStyle?: ViewProps; textStyle?: TextProps } & Pick<PressableProps, 'onPress'> &
  Pick<RNButtonProps, 'title'>

const Button: FC<ButtonProps> = ({ containerStyle, onPress, title, textStyle }) => {
  const getContainerStyle = ({ pressed }: { pressed: boolean }) => {
    return {
      ...styles.container,
      ...containerStyle,
      opacity: pressed ? 0.5 : 1,
    }
  }

  return (
    <Pressable style={getContainerStyle} onPress={onPress}>
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

import React, { FC } from 'react'
import { Pressable, PressableProps, ButtonProps as RNButtonProps, StyleSheet, ViewProps, TextProps } from 'react-native'
import colors from '../../constants/colors'
import Text from './Text'

type ButtonProps = { containerStyle?: ViewProps; textStyle?: TextProps } & Pick<PressableProps, 'onPress'> &
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
    borderColor: colors.mainBrown,
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '300',
    color: colors.mainBrown,
  },
})

export default Button

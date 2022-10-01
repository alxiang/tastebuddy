import React, { FC } from 'react'
import { StyleSheet, Text as RNText, TextProps as RNTextProps } from 'react-native'
import Colors from '../../constants/Colors'

type TextProps = { value: string } & Pick<
  RNTextProps,
  'style' | 'onPress' | 'numberOfLines' | 'ellipsizeMode' | 'lineBreakMode'
>

const Text: FC<TextProps> = ({ value, style, ...props }) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {value}
    </RNText>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '300',
    color: Colors.brown,
  },
})

export default Text

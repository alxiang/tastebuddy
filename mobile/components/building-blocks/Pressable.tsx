import React, { FC, PropsWithChildren } from 'react'
import { Pressable as RNPressable, PressableProps as RNPressableProps, ViewStyle } from 'react-native'

type PressableProps = { style?: ViewStyle | (ViewStyle | undefined)[] } & Omit<RNPressableProps, 'style'>

const Pressable: FC<PropsWithChildren<PressableProps>> = ({ style, children, ...props }) => {
  return (
    <RNPressable style={({ pressed }: { pressed: boolean }) => [style, { opacity: pressed ? 0.5 : 1 }]} {...props}>
      {children}
    </RNPressable>
  )
}

export default Pressable

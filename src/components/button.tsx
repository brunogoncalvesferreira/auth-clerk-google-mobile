import { ActivityIndicator, Text, TouchableOpacity, View, type TouchableOpacityProps } from "react-native"

import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
  icon: keyof typeof Ionicons.glyphMap
}

export function Button({ title, icon, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.9} disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ): (
        <View style={styles.button}>
          <Ionicons name={icon} size={24} color="#fff" />
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
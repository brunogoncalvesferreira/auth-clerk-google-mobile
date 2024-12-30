import { Button } from '@/components/button'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Home() {
  const { signOut } = useAuth()
  const { user } = useUser()

  return (
      <View style={styles.container}>

        <Image style={styles.image} source={{ uri: user?.imageUrl }} />

        <Text style={styles.text}>{user?.fullName}</Text>

        <Button onPress={() => signOut()} icon='log-out-outline' title='Sair'/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },

    image: {
      width: 92,
      height: 92,
      borderRadius: 10
    }
  })
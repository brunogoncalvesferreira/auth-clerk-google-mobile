import { Button } from '@/components/button'
import { StyleSheet, Text, View } from 'react-native'

import * as Liking from 'expo-linking'

import * as WebBrowser from 'expo-web-browser'

import { useOAuth } from '@clerk/clerk-expo'
import { useState } from 'react'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const googleOAuth = useOAuth({ strategy: 'oauth_google'})

  async function onGoogleSignIn() {
    try {
      setIsLoading(true)

      const redirectUrl = Liking.createURL('/')

      const oAuthFlow = await googleOAuth.startOAuthFlow({ 
        redirectUrl
      })

      if(oAuthFlow.authSessionResult?.type === 'success') {
        if(oAuthFlow.setActive) {
          await oAuthFlow.setActive({
            session: oAuthFlow.createdSessionId
          })
        }
      } else {
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entrar</Text>

      <Button 
        onPress={onGoogleSignIn} 
        icon='logo-google' 
        title='Entrar com Google'
        isLoading={isLoading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 10
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
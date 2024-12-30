import { router, Slot } from 'expo-router'

import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { useEffect } from 'react'
import { tokenCache } from '@/store/cache'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

if(!publishableKey) {
  throw new Error(
    'Missing Publishable key. Check your environment variables'
  )
}

function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    if(!isLoaded) return

    if(isSignedIn) {
      router.replace('/(auth)')
    } else {
      router.replace('/(public)')
    }

  }, [isSignedIn, isLoaded])
  
  return <Slot/>
}

export default function Layout() {
  return (
    <ClerkProvider 
      publishableKey={publishableKey} 
      tokenCache={tokenCache}
    >
        <InitialLayout/>
    </ClerkProvider>
  )
}
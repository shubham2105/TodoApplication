import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white dark:bg-black'>
      <Text className='text-3xl font-semibold text-black dark:text-white'>TodoApplication</Text>
    </SafeAreaView>
  )
}

export default LoginScreen
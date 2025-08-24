import { Text} from 'react-native'
import React from 'react'
import './global.css'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="font-semibold text-3xl text-black dark:text-white">TodoApplication</Text>
    </SafeAreaView>
  )
}

export default App


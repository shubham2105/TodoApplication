import { Text} from 'react-native'
import React from 'react'
import './global.css'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  return (
   <NavigationContainer>
      <AppNavigator/>
   </NavigationContainer>
  )
}

export default App


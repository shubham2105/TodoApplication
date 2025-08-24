import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import TodoScreen from '../screens/TodoScreen'
const Stack = createStackNavigator()

const AppNavigator = () =>{
    return(
         <Stack.Navigator>
            <Stack.Screen name = "Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name = "Signup" component={SignUpScreen} options={{headerShown:false}}/>
            <Stack.Screen name = "Todos" component={TodoScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default AppNavigator
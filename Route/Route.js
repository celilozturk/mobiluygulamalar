import { Text, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login'
import SignInScreen from '../Screens/SignIn'

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
         <Stack.Screen name='SignIn' component={SignInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
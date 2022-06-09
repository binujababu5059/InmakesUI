import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login'
import Otp from './screens/otp'
import Register from './screens/register';
import Selectschool from './screens/selectschool';
import Slider from './screens/slider';
import Home from './screens/home';




const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false  }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Selectschool" component={Selectschool} />
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;           
 
        
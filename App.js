import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftsScreen from "./screens/SpaceCraft";

const stack= createStackNavigator()

function App() {
  return(
    <NavigationContainer>
      <Stack.Naviagtor initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
        <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
        <Stack.Screen name = "StarMap" component = {StarMapScreen}/>

      </Stack.Naviagtor>
    </NavigationContainer>
  )
}

export default App
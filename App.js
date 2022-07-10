import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from './app/components/home/home';
import Chatscreen from './app/components/screens/Chatscreens';
import Main from './app/components/auth/Main';
import { UserConsumer, UserProvider } from './app/authsession/authsession';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './app/components/auth/Login';
import Register from './app/components/auth/Register';
import { Navtab } from './app/components/appsnap/navtab';


const Tab = createBottomTabNavigator();
const homeName = "Camera";
const chatsName = "Chats";
const settingsName = "Settings";
const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <UserProvider>
      <UserConsumer>
      {({ isAuth }) => (
       
        <NavigationContainer>

          <Stack.Navigator screenOptions={{ headerShown: false,}}>
        {!isAuth && (
            <Stack.Screen name="Main" component={Main} /> 
              )}
              {!isAuth && (
                <Stack.Screen name="Login" component={Login} />
                
              )}
              {!isAuth && (
                    <Stack.Screen name="Register" component={Register} />
              )}
              {isAuth && (
                    <Stack.Screen name="Register" component={Navtab} />
              )}
          </Stack.Navigator>
  </NavigationContainer>
 
   )}
  </UserConsumer>
  </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});




import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from './app/components/home/home';
import Chatscreen from '../screens/Chatscreens';
import Home from '../home/home';
// import { UserConsumer, UserProvider } from './app/authsession/authsession';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";




const Tab = createBottomTabNavigator();
const homeName = "Camera";
const chatsName = "Chats";
const settingsName = "Settings";
// const Stack = createNativeStackNavigator();

export const Navtab = () => {
  return (

   <Tab.Navigator
      initialRouteName={homeName}
      
      screenOptions={({ route }) => ({
        
       tabBarInactiveTintColor: 'grey',
       tabBarActiveTintColor: 'red',
       tabBarLabelStyle: {fontSize:15},
       tabBarStyle:{backgroundColor:'yellow'},
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'camera-outline' : 'camera-outline';

          } else if (rn === chatsName) {
            iconName = focused ? 'chatbox-outline' : 'chatbox-outline';

          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={40} color={color} />;
        },
      })}
    >

      <Tab.Screen name={chatsName} component={Chatscreen} />
      <Tab.Screen name={homeName} component={Home} />
      {/* <Tab.Screen name={settingsName} component={Register} /> */}

      

    </Tab.Navigator> 
    
  )
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

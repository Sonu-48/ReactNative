import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Bottomtab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: 'rgb(82, 103, 211)',
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 55,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="#fff" size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
            headerShown: true,
            tabBarIcon: () => <Icon name="user" color="#fff" size={25} />,
          }}
      />
       {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="user" color="#fff" size={25} />,
          }}
      /> */}
    </Tab.Navigator>
  );
};
export default Bottomtab;

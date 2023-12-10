import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../../screens/Home/Home";
import Category from "../../screens/Category/Category";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourite from "../../screens/Favourite/Favourite";
import { More } from "../../screens/More/More";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import CustomTabBarButton from "./CustomTabBarButton";

const Tab = createBottomTabNavigator();
function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route})=> ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#E0B420',
        tabBarInactiveTintColor: 'black',
        tabBarIcon:({color, size, focused}) =>{
          
          if(route.name === 'Home'){
            return focused ? <Ionicons name="home" size={24} color={color} /> : <Ionicons name="home-outline" size={24} color={color} />
          }else if(route.name === 'Category'){
            return <MaterialIcons name="category" size={24} color={color} />
          }else if(route.name === 'Favourite'){
            return <MaterialIcons name="category" size={24} color={color} />
          }else if(route.name === 'More'){
            return <MaterialIcons name="category" size={24} color={color} />
          }
        }
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarButton: props => <CustomTabBarButton {...props}/>}} />
      <Tab.Screen name="Category" component={Category} options={{ tabBarButton: props => <CustomTabBarButton {...props}/>}} />
      <Tab.Screen name="Favourite" component={Favourite} options={{ tabBarButton: props => <CustomTabBarButton {...props}/>}} />
      <Tab.Screen name="More" component={More} options={{ tabBarButton: props => <CustomTabBarButton {...props}/>}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle:{
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderTopWidth:0,
    bottom: 15,
    left:10,
    right:10,
    height:58,
  }
})

export default HomeTabScreen;

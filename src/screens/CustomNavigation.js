import React from 'react';
import { View, Text,Image, Dimensions, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppConfig from '../config/AppConfig';
import { mystyles } from '../config/stylingConfig';
import Latest from './Latest';
import Trending from './Trending';
import TopRated from './TopRated';
import CustomCardDetails from '../components/CustomCardDetails';

import CustomCard from '../components/CustomCard';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () =>  {
  return (

      <Tab.Navigator
      initialRouteName="Latest"
   
      
      
      tabBarOptions={{
        tabStyle: { alignItems: 'center', justifyContent: 'center', backgroundColor: AppConfig.colors.primary },
        labelStyle: { fontSize : AppConfig.textSize.navigator},
      
        activeTintColor: AppConfig.colors.thirdly,
        inactiveTintColor: AppConfig.colors.secondary,
    
        
        
      }}
      >
        
        <Tab.Screen 
        name="Latest" 
        component={Latest} 
        options={{
          tabBarLabel: 'Latest',
        }}
        />

<Tab.Screen 
        name="Top Rated" 
        component={TopRated} 
        options={{
          tabBarLabel: 'Top Rated',
         
        }}
        />

        
<Tab.Screen 
        name="Trending" 
        component={Trending} 
        options={{
          tabBarLabel: 'Trending',
        }}
        />
        
        
      </Tab.Navigator>
 
  );
}




const CustomNavigation = (navigation) => {
  return (

    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          gestureDirection: 'horizontal',
          style: {
            backgroundColor: 'red'
          }
          
        }}
      >

      
       
          <Stack.Screen name="TabNavigator" component={TabNavigator}/>

          <Stack.Screen name="CustomCardDetails" component={CustomCardDetails}/>
          <Stack.Screen name="CustomCard" component={CustomCard}/>
           
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}





export default CustomNavigation;
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ZoomMeeting from '../screens/zoom-meeting/ZoomMeeting';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName="zoom">
          <Stack.Screen 
            name="zoom" 
            component={ZoomMeeting} 
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
  };

 
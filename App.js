import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>

          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Welcome'}}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>

          <View
              style={[
                  styles.container,
                  {
                      // Try setting `flexDirection` to `"row"`.
                      flexDirection: 'column',
                  },
              ]}>
              <View style={{flex: 2, backgroundColor: 'red'}} />
              <View style={{flex: 2, backgroundColor: 'darkorange'}} />
              <View style={{flex: 2, backgroundColor: 'green'}} />
          </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },

});

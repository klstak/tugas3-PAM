import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './compenents/home';
import infoPenerbangan from './compenents/infoPenerbangan';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"home"}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
      >
        <Stack.Screen
          name="home" compenents={home}
          options={{
            title: "",
            headerLeft: () => <FontAwesome name="bars" size={24} color="white" style={{marginLeft:20}}/>,
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
          }}
        />
        <Stack.Screen
          name="Dua" compenents={infoPenerbangan}
          options={{
            title: "Hiling.id",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{marginRight:20}}/>,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
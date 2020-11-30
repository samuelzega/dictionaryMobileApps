import * as React from 'react';
import {
  Home,
  Kamus,
  Indo,
  Inggris,
  Hitu,
  Pengetahuan,
  Tentang,
} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kamus"
          component={Kamus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Indo"
          component={Indo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Inggris"
          component={Inggris}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hitu"
          component={Hitu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pengetahuan"
          component={Pengetahuan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tentang"
          component={Tentang}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormStudentsScreen } from './screens/FormStudentsScreen';
import { StudentsScreen } from './screens/StudentsScreen';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Students Form" component={FormStudentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
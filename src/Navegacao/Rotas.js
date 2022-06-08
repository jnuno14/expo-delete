import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Servicos from "../telas/Servicos";
import Carrinho from "../telas/Carrinho";

const Stack = createNativeStackNavigator();

export default function Tela() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Servicos" 
          component={Servicos}
          options={{ title: 'Lista de Produtos',
           headerStyle: {
             backgroundColor: 'darkorange'
           },
           headerTintColor: 'white',
           headerTitleAlign: 'center'

            }}
         />
        <Stack.Screen name="Carrinho"
         component={Carrinho}
         options={{
           headerStyle: {
             backgroundColor: 'darkorange'
           },
           headerTintColor: 'white',
           headerTitleAlign: 'center'
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


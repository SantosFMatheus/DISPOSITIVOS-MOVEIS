// src/pages/AppNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login/index';
import Cadastro from './cadastro/index';
import Home from './home/index';
import ParqueDetails from './parqueDetails/index'; // Nova tela
import Agendamento from './agendamento/index'; // Nova tela
import MeusAgendamentos from './meusAgendamentos/index'; // Nova tela

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  ParqueDetails: undefined; // Nova rota
  Agendamento: undefined; // Nova rota
  MeusAgendamentos: undefined; // Nova rota
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ParqueDetails" component={ParqueDetails} />
        <Stack.Screen name="Agendamento" component={Agendamento} />
        <Stack.Screen name="MeusAgendamentos" component={MeusAgendamentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; //
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; //
import { RootStackParamList } from '../../pages/AppNavigation'; // Importa a tipagem de rotas
import { style } from './styles'; // Importa os estilos do Menu

type NavigationProps = NativeStackNavigationProp<RootStackParamList>; // Define o tipo para as props de navegação

export default function Menu() { //
  const navigation = useNavigation<NavigationProps>(); // Obtém o objeto de navegação tipado

  return (
    <View style={style.menuContainer}> {/* Container do menu */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}> {/* Botão para Home */}
        <Text style={style.menuItem}>Home</Text> {/* Texto do item Home */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}> {/* Botão para Login */}
        <Text style={style.menuItem}>Login</Text> {/* Texto do item Login */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}> {/* Botão para Cadastro */}
        <Text style={style.menuItem}>Cadastro</Text> {/* Texto do item Cadastro */}
      </TouchableOpacity>
    </View>
  );
}
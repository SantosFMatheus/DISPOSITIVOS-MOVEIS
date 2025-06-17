// src/pages/home/index.tsx
import React from "react";
import { View, Text } from "react-native";
import { style } from './styles';
import Menu from '../../components/menu/Menu'; // Importa o componente Menu

export default function Home() {
  return (
    <View style={style.container}>
      <Menu /> {/* Renderiza o componente Menu aqui */}
      <Text>Conteúdo da Home</Text> {/* Adicione qualquer conteúdo adicional para a tela Home */}
    </View>
  );
}
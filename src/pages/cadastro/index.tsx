import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
// Importações necessárias para tipagem da navegação
import { NativeStackScreenProps } from "@react-navigation/native-stack"; // Adicionado para tipar o navigation
import { RootStackParamList } from "../AppNavigation"; // Certifique-se de que este caminho está correto, dois níveis acima

// Define o tipo das propriedades para a tela de Cadastro
type CadastroScreenProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>; //

// Adicione '{ navigation }' como uma prop tipada para o componente Cadastro
export default function Cadastro({ navigation }: CadastroScreenProps) { //
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleCadastro() {
    if (!nome || !email || !senha) {
      // Use "Erro" como título para consistência com o exemplo anterior
      return Alert.alert("Erro", "Preencha todos os campos");
    }

    // Alerta de sucesso com navegação para a tela Home
    Alert.alert("Cadastro realizado com sucesso!", "", [
      { text: "OK", onPress: () => navigation.navigate("Home") } //
    ]);
    console.log("Cadastro:", nome, email, senha);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Página de Cadastro</Text>

      {/* Campo Nome */}
      <Text style={style.label}>Nome</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Digite seu nome"
        />
        <MaterialIcons name="person" size={20} color="gray" />
      </View>

      {/* Campo Email */}
      <Text style={style.label}>E-mail</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <MaterialIcons name="email" size={20} color="gray" />
      </View>

      {/* Campo Senha */}
      <Text style={style.label}>Senha</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <MaterialIcons name="lock" size={20} color="gray" />
      </View>

      {/* Botão de Cadastro */}
      <TouchableOpacity style={style.button} onPress={handleCadastro}>
        <Text style={style.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
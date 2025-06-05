import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { style } from './styles';
import { themas } from "../../global/themes";
import {MaterialIcons} from '@expo/vector-icons';
import AppNavigation from "../AppNavigation";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function getLogin() {
        try {
          if (!email || !senha) {
            return Alert.alert('Preencha todos os campos');
          }
          Alert.alert('Logado com sucesso!!!');
        } catch (error) {
          console.log('Erro ao logar:');
        }
      }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={require('../../assets/login-96.png')} />
        <Text>Bem Vindo!</Text>
      </View>
      <View style={style.boxMid}>
      <Text style={style.title}>E-mail</Text>
      <View style={style.boxInputEmail}>
        <TextInput
          style={style.input}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <MaterialIcons name="email" size={20} color={themas.colors.gray} />
      </View>

      <Text style={style.title}>Coloque sua Senha</Text>
      <View style={style.boxInputSenha}>
        <TextInput
          style={style.input}
          value={senha}
          onChangeText={(e) => setSenha(e)}
          secureTextEntry={true}
        />
        <MaterialIcons name="password" size={20} color={themas.colors.gray} />
      </View>
    </View>

    <View style={style.boxBottom}>
  <TouchableOpacity style={style.button} onPress={getLogin}>
    <Text>Entrar</Text>
  </TouchableOpacity>

  {/* Link para cadastro */}
  {/* Link para a tela de Cadastro */}
  <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
    <Text>Não tem conta? Cadastre-se aqui!</Text>
  </TouchableOpacity>
</View>
  </View>
);
}

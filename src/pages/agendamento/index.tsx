import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { style } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';
import DateTimePicker from '@react-native-community/datetimepicker'; // Instale esta biblioteca!
import { db } from '../../config/firebaseConfig'; // Importe o Firestore
import { collection, addDoc } from 'firebase/firestore'; // Funções do Firestore
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';

type AgendamentoProps = NativeStackScreenProps<RootStackParamList, 'Agendamento'>;

export default function Agendamento({ navigation }: AgendamentoProps) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hora, setHora] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [numVisitantes, setNumVisitantes] = useState('');
  const [email, setEmail] = useState('');

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || data;
    setShowDatePicker(Platform.OS === 'ios');
    setData(currentDate);
  };

  const onChangeTime = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || hora;
    setShowTimePicker(Platform.OS === 'ios');
    setHora(currentTime);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const handleAgendar = async () => {
    if (!nome || !numVisitantes || !email) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      // Adicionar dados ao Firestore
      await addDoc(collection(db, 'agendamentos'), {
        nome: nome,
        data: data.toISOString().split('T')[0], // Formato YYYY-MM-DD
        hora: hora.toTimeString().split(' ')[0].substring(0, 5), // Formato HH:MM
        numVisitantes: parseInt(numVisitantes),
        email: email,
        agendadoEm: new Date().toISOString(), // Timestamp do agendamento
      });

      Alert.alert('Sucesso', 'Seu agendamento foi realizado com sucesso!');
      // Opcional: Navegar para a tela de Meus Agendamentos
      navigation.navigate('MeusAgendamentos');

      // Limpar o formulário
      setNome('');
      setNumVisitantes('');
      setEmail('');
      setData(new Date());
      setHora(new Date());

    } catch (e) {
      console.error('Erro ao adicionar documento: ', e);
      Alert.alert('Erro', 'Não foi possível realizar o agendamento. Tente novamente.');
    }
  };

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>Agendar Visita ao Parque</Text>

      <Text style={style.label}>Seu Nome:</Text>
      <TextInput
        style={style.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={style.label}>Data da Visita:</Text>
      <TouchableOpacity onPress={showDatepicker} style={style.dateInput}>
        <Text style={style.dateText}>{data.toLocaleDateString()}</Text>
        <MaterialIcons name="calendar-today" size={20} color={themas.colors.gray} />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={data}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={style.label}>Hora da Visita:</Text>
      <TouchableOpacity onPress={showTimepicker} style={style.dateInput}>
        <Text style={style.dateText}>{hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        <MaterialIcons name="access-time" size={20} color={themas.colors.gray} />
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={hora}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}

      <Text style={style.label}>Número de Visitantes:</Text>
      <TextInput
        style={style.input}
        placeholder="Ex: 2"
        keyboardType="numeric"
        value={numVisitantes}
        onChangeText={setNumVisitantes}
      />

      <Text style={style.label}>Seu E-mail:</Text>
      <TextInput
        style={style.input}
        placeholder="email@exemplo.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={style.button} onPress={handleAgendar}>
        <Text style={style.buttonText}>Agendar Agora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
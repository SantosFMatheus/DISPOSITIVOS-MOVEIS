import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { db } from '../../config/firebaseConfig'; // Importe o Firestore
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Funções do Firestore
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigation';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

type Agendamento = {
  id: string;
  nome: string;
  data: string;
  hora: string;
  numVisitantes: number;
  email: string;
};

type MeusAgendamentosProps = NativeStackScreenProps<RootStackParamList, 'MeusAgendamentos'>;

export default function MeusAgendamentos({ navigation }: MeusAgendamentosProps) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAgendamentos = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'agendamentos'), orderBy('data', 'asc'), orderBy('hora', 'asc'));
      const querySnapshot = await getDocs(q);
      const fetchedAgendamentos: Agendamento[] = [];
      querySnapshot.forEach((doc) => {
        fetchedAgendamentos.push({ id: doc.id, ...doc.data() } as Agendamento);
      });
      setAgendamentos(fetchedAgendamentos);
    } catch (e) {
      console.error('Erro ao buscar agendamentos: ', e);
      Alert.alert('Erro', 'Não foi possível carregar seus agendamentos.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir este agendamento?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'agendamentos', id));
              Alert.alert('Sucesso', 'Agendamento excluído com sucesso!');
              fetchAgendamentos(); // Recarrega a lista após a exclusão
            } catch (e) {
              console.error('Erro ao excluir agendamento: ', e);
              Alert.alert('Erro', 'Não foi possível excluir o agendamento.');
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    // Recarregar agendamentos quando a tela focar
    const unsubscribe = navigation.addListener('focus', () => {
      fetchAgendamentos();
    });

    return unsubscribe;
  }, [navigation]);

  if (loading) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator size="large" color={themas.colors.primary} />
        <Text>Carregando agendamentos...</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Meus Agendamentos</Text>
      <ScrollView style={style.tableContainer}>
        <View style={style.tableHeader}>
          <Text style={style.headerText}>Nome</Text>
          <Text style={style.headerText}>Data</Text>
          <Text style={style.headerText}>Hora</Text>
          <Text style={style.headerText}>Vis.</Text>
          <Text style={style.headerText}>Ações</Text>
        </View>
        {agendamentos.length === 0 ? (
          <Text style={style.noDataText}>Nenhum agendamento encontrado.</Text>
        ) : (
          agendamentos.map((item) => (
            <View key={item.id} style={style.tableRow}>
              <Text style={style.rowText}>{item.nome}</Text>
              <Text style={style.rowText}>{item.data}</Text>
              <Text style={style.rowText}>{item.hora}</Text>
              <Text style={style.rowText}>{item.numVisitantes}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={style.deleteButton}>
                <MaterialIcons name="delete" size={20} color={themas.colors.white} />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
      <TouchableOpacity
        style={style.newAppointmentButton}
        onPress={() => navigation.navigate('Agendamento')}
      >
        <Text style={style.newAppointmentButtonText}>Novo Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}
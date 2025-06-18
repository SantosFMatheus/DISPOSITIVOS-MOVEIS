import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { useNavigation } from "@react-navigation/native"; // Correto: useNavigation vem de @react-navigation/native
import { NativeStackScreenProps } from "@react-navigation/native-stack"; 
import { RootStackParamList } from '../AppNavigation';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

type ParqueDetailsProps = NativeStackScreenProps<RootStackParamList, 'ParqueDetails'>;

export default function ParqueDetails({ navigation }: ParqueDetailsProps) {
  return (
    <ScrollView style={style.container}>
      <Image
        source={require('../../assets/capivara1.jpg')} // Crie esta imagem
        style={style.image}
      />
      <Text style={style.title}>Parque da Capivara</Text>
      <Text style={style.description}>
        Bem-vindo ao Parque da Capivara! Um lugar encantador onde a natureza e a vida selvagem se encontram.
        Aqui você pode observar capivaras em seu habitat natural, desfrutar de trilhas ecológicas e áreas de lazer.
        Ideal para um passeio em família ou com amigos. Agende sua visita e venha desfrutar!
      </Text>
      <Image
        source={require('../../assets/capivara2.jpg')} // Crie esta imagem
        style={style.image}
      />
      <Text style={style.description}>
        Nosso parque oferece diversas atrações, incluindo passeios de barco,
        áreas de piquenique e um centro de visitantes com exposições sobre a fauna e flora local.
        Garantimos uma experiência memorável para todas as idades.
      </Text>
      {/* Botão para agendar */}
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Agendamento')}
      >
        <Text style={style.buttonText}>Agendar Visita</Text>
        <MaterialIcons name="event-available" size={24} color={themas.colors.white} style={style.buttonIcon} />
      </TouchableOpacity>
      {/* Botão para ver agendamentos */}
      <TouchableOpacity
        style={[style.button, { backgroundColor: themas.colors.secondary }]} // Cor diferente
        onPress={() => navigation.navigate('MeusAgendamentos')}
      >
        <Text style={style.buttonText}>Meus Agendamentos</Text>
        <MaterialIcons name="list" size={24} color={themas.colors.white} style={style.buttonIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}
import { StyleSheet, Dimensions } from 'react-native';
import { themas } from '../../global/themes';

const { width } = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.bgScreen,
    padding: 20,
  },
  image: {
    width: '100%',
    height: width * 0.6, // Altura responsiva
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themas.colors.primary,
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: themas.colors.black,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: themas.colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonText: {
    color: themas.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 5,
  }
});
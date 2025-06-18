import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.bgScreen,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themas.colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: themas.colors.black,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: themas.colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: themas.colors.gray,
  },
  dateInput: {
    backgroundColor: themas.colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themas.colors.gray,
  },
  dateText: {
    fontSize: 16,
    color: themas.colors.black,
  },
  button: {
    backgroundColor: themas.colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: themas.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
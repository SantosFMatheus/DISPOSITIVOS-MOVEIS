import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.bgScreen,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themas.colors.bgScreen,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themas.colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  tableContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: themas.colors.gray,
    borderRadius: 8,
    overflow: 'hidden', // Para cantos arredondados na tabela
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: themas.colors.primary,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: themas.colors.gray,
  },
  headerText: {
    flex: 1,
    color: themas.colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: themas.colors.white,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: themas.colors.lightGray,
    alignItems: 'center',
  },
  rowText: {
    flex: 1,
    color: themas.colors.black,
    textAlign: 'center',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: themas.colors.gray,
  },
  newAppointmentButton: {
    backgroundColor: themas.colors.secondary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  newAppointmentButtonText: {
    color: themas.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
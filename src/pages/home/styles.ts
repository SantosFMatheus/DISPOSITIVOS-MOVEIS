import { Button, Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    // A imagem não mostra as propriedades exatas dentro do container,
    // mas geralmente seria algo como:
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themas.colors.bgScreen, // Usando uma cor do seu tema
  }
});
import { StyleSheet } from "react-native"; //
import { themas } from "../../global/themes"; // Importa as cores do tema global

export const style = StyleSheet.create({ //
  menuContainer: {
    flexDirection: "row", // Organiza os itens em linha
    justifyContent: "space-around", // Distribui o espaço igualmente entre os itens
    backgroundColor: themas.colors.lightGray, // Cor de fundo do menu
    padding: 10, // Preenchimento interno
    borderBottomWidth: 1, // Borda na parte inferior
    borderBottomColor: themas.colors.gray, // Cor da borda
  },
  menuItem: {
    fontSize: 16, // Tamanho da fonte do item do menu
    fontWeight: "bold", // Peso da fonte em negrito
    color: themas.colors.black, // Cor do texto do item (exemplo, não visível na imagem, mas comum)
  },
});
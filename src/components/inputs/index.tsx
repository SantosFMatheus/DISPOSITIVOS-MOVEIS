import React, { forwardRef } from "react";
import { View, Text } from "react-native";

// O forwardRef é usado aqui porque o slide o mostra,
// mas para um componente de teste simples, não é estritamente necessário agora.
// Ele seria útil se você quisesse passar uma ref para um elemento interno.
export const Input = forwardRef(() => {
  return (
    <View>
      <Text>Componentes</Text>
    </View>
  );
});
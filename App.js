import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindos ao nosso App!</Text>
      <Text style={styles.subtitulo}>Agora com estilos básicos 🎨</Text>
      <Text style={styles.paragrafo}>
        Este texto tem margem em cima, tamanho 16 e cor padrão.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa a tela toda
    justifyContent: 'center',// centraliza vertical
    alignItems: 'center',    // centraliza horizontal
    backgroundColor: '#10B981',
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#37251fff'         // cinza-escuro
  },
  subtitulo: {
    marginTop: 8,
    fontSize: 18,
    color: '#10B981'         // verde
  },
  paragrafo: {
    marginTop: 12,
    fontSize: 16
  }
});

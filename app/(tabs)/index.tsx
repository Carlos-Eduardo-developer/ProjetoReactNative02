import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://www.metroworldnews.com.br/resizer/v2/LCLGWUO4QJHPLHER6HIEM32KQQ.jpg?smart=true&auth=8802d548420a893c609be8e62065914e2be5b198094d800f2a728d70f6e8a0e1&width=1440&height=' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Carlos Eduardo</Text>
      <Text style={styles.description}>
        Desenvolvedor de software apaixonado por tecnologia e inovação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#999',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#111',
    textAlign: 'center',
  },
});

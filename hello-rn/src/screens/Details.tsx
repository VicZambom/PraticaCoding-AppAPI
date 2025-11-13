import React from 'react';
import { View, Image, StyleSheet, ScrollView, Linking } from 'react-native'; 
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

import { Text, Button } from 'react-native-paper';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <Text variant="headlineSmall" style={styles.title}>{article.title}</Text>
      <Text variant="bodySmall" style={styles.date}>{new Date(article.publishedAt).toLocaleString()}</Text>
      <Text variant="bodyLarge" style={styles.content}>{article.content || article.description}</Text>

      <Button 
        icon="open-in-new" 
        mode="contained" 
        onPress={() => Linking.openURL(article.url)}
        style={styles.button}
        > Ler artigo completo
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontWeight: 'bold', marginVertical: 10 },
  date: { color: '#888', marginBottom: 10 },
  content: { fontSize: 16, marginBottom: 20 },
  button: { marginTop: 10, marginBottom: 20 },
});

export default DetailsScreen;
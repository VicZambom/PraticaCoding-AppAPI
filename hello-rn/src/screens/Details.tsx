import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Article } from '../types/news';

type Props = {
  route: RouteProp<{ params: { article: Article } }, 'params'>;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.date}>{new Date(article.publishedAt).toLocaleString()}</Text>
      <Text style={styles.content}>{article.content || article.description}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(article.url)}>
        Read full article
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  date: { color: '#888', marginBottom: 10 },
  content: { fontSize: 16, marginBottom: 20 },
  link: { color: 'blue', textDecorationLine: 'underline' },
});

export default DetailsScreen;
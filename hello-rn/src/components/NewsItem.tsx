import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Article } from '../types/news';

interface Props {
  article: Article;
  onPress: () => void;
}

const NewsItem: React.FC<Props> = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {article.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginVertical: 8 },
  image: { width: 100, height: 100, borderRadius: 8 },
  textContainer: { flex: 1, marginLeft: 10 },
  title: { fontWeight: 'bold', fontSize: 16 },
  description: { color: '#555' },
});

export default NewsItem;
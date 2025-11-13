import React from 'react';
import { StyleSheet } from 'react-native';
import { Article } from '../types/news';

import { Card, Text } from 'react-native-paper';

interface Props {
  article: Article;
  onPress: () => void;
}

const NewsItem: React.FC<Props> = ({ article, onPress }) => {
  return (
    <Card style={styles.container} onPress={onPress}>
      {article.urlToImage && (
        <Card.Cover source={{ uri: article.urlToImage }} />
      )}
      <Card.Content>
        <Text variant="titleMedium" style={styles.title}>{article.title}</Text>
        <Text variant="bodyMedium" numberOfLines={2} style={styles.description}>
          {article.description}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { 
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  description: { 
    marginTop: 4,
  },
});

export default NewsItem;
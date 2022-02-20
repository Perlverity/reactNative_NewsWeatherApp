/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import NewsKizi from '../components/NewsKizi';
import axios from 'axios';
import {nAPI, wAPI} from 'config';

const newsapi = '74c00a4f9c4b4e8f9f9711ce9fde2c08';
const URI = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${newsapi}`;

export default function NewsScreen({navigation}) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get(URI);
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <NewsKizi
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
            onPress={() => navigation.navigate('詳細ページ', {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

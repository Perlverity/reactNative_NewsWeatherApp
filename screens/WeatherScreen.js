import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import WeatherItem from '../components/WeatherItem';
import Config from 'react-native-config';
import axios from 'axios';

const weaterapi = Config.wapi;
const URI = ``;

export default function App() {
  const [weather, setWeathers] = useState([]);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <WeatherItem description="" icon="" name="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

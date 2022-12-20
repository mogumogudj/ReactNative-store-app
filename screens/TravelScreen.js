import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import apiKey from '../apiKey';
import TravelItem from '../components/TravelItem';

const TravelsScreen = ({ navigation }) => {

  const [content, setContent] = useState([]);
  const getItems = async () => {
    try {
      const response = await fetch("https://arnesamson.be/wp-json/wp/v2/posts?categories=14", {}
      )
      const json = await response.json();
      setContent(json)
      // console.log(content);
    } catch (error) {
      console.error(error);
    }
    
  }


  useEffect(() => {
    getItems();//loads the store items
  }, []);

  return (

    <View style={styles.screen}>

      <TextInput
        placeholder="search a trip"
        style={styles.input}
        //geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      />

      <FlatList

        data={content}
        keyExtractor={item => item.id}
        renderItem={
          ({ item }) => (
          
          <TravelItem
            title={item.title.rendered}
            metadata={item.yoast_head_json.og_description.split(' ')}
            metaimage={item.yoast_head_json.og_image[0].url}
            itemid={item.id}
          />

          )
        }

      />

    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
export default TravelsScreen;
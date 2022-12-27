import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image, Pressable } from 'react-native';
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
    } catch (error) {
      console.error(error);
    }
    
  }


  useEffect(() => {
    getItems();//loads the store items
  }, [content]);

  return (

    <View style={styles.screen}>

      <Pressable onPress={() => navigation.navigate('Cart')}>
        <Image style={styles.imagestyle} source={require('../assets/cart.png')}/>
      </Pressable>

      <TextInput
        style={styles.searchfield}
        placeholder="search a trip"
        placeholderTextColor="#B7B7B7" 
        //geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      />

      <FlatList

        data={content}
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
    padding: 30,
    backgroundColor: "#000000"
  },
  searchfield: {
    marginVertical: 10,
  },
  imagestyle: {
    marginLeft: '94%',
    height: 18,
    width: 20,
  },
});
export default TravelsScreen;
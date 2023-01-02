import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image, Pressable } from 'react-native';

// import apiKey from '../apiKey';
import TravelItem from '../components/TravelItem';

const TravelsScreen = ({ navigation }) => {
  
  const [content, setContent] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch("https://arnesamson.be/wp-json/wp/v2/posts?categories=14", {});
      const json = await response.json();
      setContent(json)
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {
    getItems();//loads the store items
  }, [content]);


  const getTravelsByTitleSearch = async (enteredText) => {
    try {
        const url = encodeURI("https://arnesamson.be/index.php/wp-json/wp/v2/posts?tags=" + enteredText + "/");
        console.log(url);
        const response = await fetch(url)
        const json = await response.json();
        console.log(json);
        setContent(json);
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <View style={styles.screen}>

      <Pressable onPress={() => navigation.navigate('CartScreen')}>
        <Image style={styles.imagestyle} source={require('../assets/cart.png')}/>
      </Pressable>

      <TextInput
        style={styles.searchfield}
        placeholder="search a trip"
        placeholderTextColor="#B7B7B7" 
        onChangeText={getTravelsByTitleSearch}
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
    backgroundColor: "#000000",
    marginBottom: 50,
    
  },
  searchfield: {
    color: "#ffffff",
    marginVertical: 10,
  },
  imagestyle: {
    marginLeft: '94%',
    height: 18,
    width: 20,
  },
});
export default TravelsScreen;
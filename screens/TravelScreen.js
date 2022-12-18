import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import apiKey from '../apiKey';
import TravelItem from '../components/TravelItem';

const TravelsScreen = ({ navigation }) => {

  const [content, setContent] = useState([]);

  const getItems = async () => {

    try {
      const response = await fetch("https://arnesamson.be/wp-json/wp/v2/posts?categories=14", {
        
        }
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

      <FlatList
      
        data={content}

        renderItem={({ item }) => (
          <TravelItem
          title={item.title.rendered}
          rating={item.id}
          metadata={item.yoast_head_json.og_description}
          
          />
        )}
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
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TravelItem = itemprops => {
  const navigation = useNavigation();

  return (
      <View style={styles.listItem}>
        <TouchableOpacity>

          <Image style={styles.imagestyle} source={{uri: itemprops.metaimage}}/>
          
          <Text>days: {itemprops.metadata[0]}</Text>
          <Text>persons: {itemprops.metadata[1]}</Text>
          <Text>lunch: {itemprops.metadata[2]}</Text>
          <Text>guided: {itemprops.metadata[3]}</Text>
          <Text>courses: {itemprops.metadata[4]}</Text>
          <Text>scenery: {itemprops.metadata[5]}</Text>
          <Text>type of skiing: {itemprops.metadata[6]}</Text>
          <Text>price: {itemprops.metadata[7]}</Text>

          <Pressable onPress={() => navigation.navigate("DetailsScreen", {itemTitle: itemprops.title, itemID: itemprops.itemid, itemMeta: itemprops.metadata, itemImage: itemprops.metaimage})}>
            <Text style={styles.text}>Bekijk product: {itemprops.title}</Text>
          </Pressable>


        </TouchableOpacity>

      </View>

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  },
  imagestyle: {
    height: 200,
  }
});
export default TravelItem;
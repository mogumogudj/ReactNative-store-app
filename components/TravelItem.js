import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TravelItem = itemprops => {

  const [metaitem, setMetaItem] = useState([]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => itemprops.onSelectTravel(props.id)}>
      <View style={styles.listItem}>
        <Text>{itemprops.rating} ~ {itemprops.title}</Text>
        <Text>days: {itemprops.metadata[0]}</Text>
        <Text>persons: {itemprops.metadata[1]}</Text>
        <Text>lunch: {itemprops.metadata[2]}</Text>
        <Text>guided: {itemprops.metadata[3]}</Text>
        <Text>courses: {itemprops.metadata[4]}</Text>
        <Text>type of skiing: {itemprops.metadata[5]}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  }
});
export default TravelItem;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TravelItem = props => {

  const [metaitem, setMetaItem] = useState([]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectTravel(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.rating} ~ {props.title}</Text>
        <Text >{props.metadata}</Text>
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
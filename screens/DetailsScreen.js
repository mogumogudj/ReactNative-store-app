import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Image, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


const DetailsScreen = ({ navigation, route }) => {

  return (
    <View style={styles.screen}>

      <Image style={styles.imagestyle} source={{uri: route.params.itemImage}}/>

      <View style={styles.content}>
      <Text>{route.params.itemTitle}</Text>
      <Text>{route.params.itemID}</Text>
      <Text>{route.params.itemMeta[5]}</Text>
      </View>

      <Button
        title="see all travel options"
        onPress={() => navigation.navigate('TravelsScreen')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    alignContent: 'stretch',
  },
  imagestyle: {
    height: 300,
  }
});
export default DetailsScreen;
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ShoppingCart from '../components/ShoppingCart';
import TravelsScreen from './TravelScreen';


const CartScreen = ({ navigation, route }) => {
  // console.log(route.params);
  return(
  <View style={styles.screen}>

    {/* <FlatList

      data={route.params}
      keyExtractor={item => item.cartItemID}
      renderItem={
        ({ item } ) => (

          <ShoppingCart
          ShoppingCartTitle={item.params.cartItemTitle}
          />

          )
      }

    /> */}
    {/* <Text style={styles.testlist}>{route.params.cartItemID}</Text> */}

    <ShoppingCart ShoppingCartTitle={"test titel"}/>


  </View>

  );

}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#000000"
    },
    imagestyle: {
      height: 18,
    },
    testlist: {
      paddingLeft: 20,
      color: "#ffffff"
    }
  });
  
export default CartScreen;
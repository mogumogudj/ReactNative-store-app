import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ShoppingCart from '../components/ShoppingCart';



const CartScreen = ({ navigation, route }) => {
    

  return(

  <View style={styles.screen}>

    {/* <ShoppingCart ShoppingCartTitle={route.params.cartItemTitle}/> */}
    <ShoppingCart/>


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
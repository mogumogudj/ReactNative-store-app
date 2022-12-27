import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShoppingCart = cartprops => {
  const navigation = useNavigation();

  return(
    <View style={styles.listItem}>
      
      <Text style={styles.content}> test </Text>
      <Text style={styles.content}> {cartprops.ShoppingCartTitle}</Text>

    </View>
  );

}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#000000"
  
    },
    content: {
      alignContent: 'stretch',
      padding: 10,
      color: "#ffffff",
    },
    listItem: {
        padding: 10,
        marginVertical: 5,
        borderColor: '#C94838',
        borderStyle: 'solid',
        borderWidth: 0.5,
      },
  });

export default ShoppingCart;
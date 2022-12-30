import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShoppingCart = cartprops => {
  const navigation = useNavigation();

  const [itemAmount, setItemAmount] = useState(0);

  function addition() {
    if(itemAmount<8){
      setItemAmount((currenItemAmount) => currenItemAmount + 1);
    }
  }
  function subtraction(){
    if(itemAmount>0){
      setItemAmount((currenItemAmount) => currenItemAmount - 1);
    }
  }


  return(
    <View style={styles.listItem}>
      
      <Text style={styles.content}> {cartprops.title} ~ </Text>
      <Text style={styles.content}> {cartprops.price} ~ </Text>

      <View style={styles.addsub}>
        <Pressable onPress={addition}>
          <Text style={styles.content}>+</Text>
        </Pressable>

        <Text style={styles.content}>{itemAmount}</Text>

        <Pressable onPress={subtraction}>
          <Text style={styles.content}>-</Text>
        </Pressable>
      </View>
      <Text>{cartprops.allData}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#000000",
  
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
    addsub: {
      flexDirection: 'row',
    },
  });

export default ShoppingCart;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

  function orderCalc(){

  }

  return(
    <View style={styles.listItem}>
      
      <Image style={styles.imagestyle} source={{uri: cartprops.image}}/>

      <Text style={styles.content}>{cartprops.title}</Text>
      <Text style={styles.content}>{cartprops.price}</Text>

      <View style={styles.addsub}>
        <Pressable onPress={subtraction}>
          <Text style={styles.content}>-</Text>
        </Pressable>

        <Text style={styles.content}>{itemAmount}</Text>

        <Pressable onPress={addition}>
          <Text style={styles.content}>+</Text>
        </Pressable>
      </View>

      <Pressable style={styles.orderbutton} onPress={orderCalc}>
          <Text style={styles.buttontext}>ORDER NOW</Text>
      </Pressable>

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
    imagestyle: {
      height: 200,
    },
    orderbutton: {
      backgroundColor: "#222222",
      paddingVertical: 10,
      width: '100%',
      marginTop: 10,
    },
    buttontext: {
      textAlign: 'center',
      color: "#C94838", 
      fontSize: 16,
    },
  });

export default ShoppingCart;
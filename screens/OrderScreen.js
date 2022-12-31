import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = ({navigation, route}) => {
    
    return(
        <View style={styles.screen}>
            <Text style={styles.content}>Betaal €{route.params.OrderTotal}</Text>

            <View>
                
            </View>


        </View>
    )
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
    minibuttons: {
        backgroundColor: "#ffffff",
    },
  });

export default OrderScreen;
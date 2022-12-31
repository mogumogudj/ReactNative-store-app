import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

const OrderScreen = ({navigation, route}) => {

    function alertnoti(){
        Alert.alert('purchase succeeded')
    }
    
    return(
        <View style={styles.screen}>

            <Text style={styles.content}>pay €{route.params.OrderTotal}</Text>

            <Pressable style={styles.orderbutton} onPress={() => {navigation.navigate('TravelsScreen'); alertnoti();}}>
                <Text style={styles.payment}>PAY</Text>
            </Pressable>



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
        textAlign: "center",
        fontSize: 30,
        alignContent: 'stretch',
        padding: 10,
        color: "#ffffff",
    },
    payment: {
        paddingVertical: 50,
        fontWeight: "900",
        fontSize: 50,
        color: "#ffffff",
        textAlign: "center",
    },
    imagestyle: {
        height: 200,
    },
    orderbutton: {
        backgroundColor: "#222222",
        paddingVertical: 10,
        width: '100%',
        marginTop: 100,
      },
  });

export default OrderScreen;
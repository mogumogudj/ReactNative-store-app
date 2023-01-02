import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TravelsScreen from './screens/TravelScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TravelsScreen" component={TravelsScreen} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#C94838',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
          title: 'Product',
          headerStyle: {
            backgroundColor: '#C94838',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="CartScreen" component={CartScreen} options={{
          title: 'Shopping Cart',
          headerStyle: {
            backgroundColor: '#C94838',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="OrderScreen" component={OrderScreen} options={{
          title: 'order',
          headerStyle: {
            backgroundColor: '#C94838',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

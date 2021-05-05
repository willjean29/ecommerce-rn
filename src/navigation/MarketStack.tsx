import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Market from 'screens/Market/Market';
import Contact from 'screens/Market/Contact';
import MessageList from 'screens/Market/MessageList';
import DetailProduct from 'screens/Market/DetailProduct';
const Stack = createStackNavigator();
export interface MarketStackProps {
  
}
 
const MarketStack: React.FC<MarketStackProps> = () => {
  return (  
    <Stack.Navigator>
      <Stack.Screen
        name="market"
        component={Market}
        options={{
          title: "Tienda",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="detail-product"
        component={DetailProduct}
        options={{
          title: "Detalle de Producto"
        }}
      />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{
          title: "Contactar"
        }}
      />
      <Stack.Screen
        name="messages"
        component={MessageList}
        options={{
          title: "Mensajes"
        }}
      />
    </Stack.Navigator>
  );
}
 
export default MarketStack;
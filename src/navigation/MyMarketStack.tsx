import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyMarket from 'screens/MyMarket/MyMarket';
import EditProduct from 'screens/MyMarket/EditProduct';
const Stack = createStackNavigator();
export interface MyMarketStackProps {
  
}
 
const MyMarketStack: React.FC<MyMarketStackProps> = () => {
  return (  
    <Stack.Navigator>
      <Stack.Screen
        name="my-market"
        component={MyMarket}
        options={{
          title: "Mi Tienda"
        }}
      />
      <Stack.Screen
        name="edit-product"
        component={EditProduct}
        options={{
          title: "Editar Producto"
        }}
      />
    </Stack.Navigator>
  );
}
 
export default MyMarketStack;
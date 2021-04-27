import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyMarket from 'screens/MyMarket/MyMarket';
import EditProduct from 'screens/MyMarket/EditProduct';
import { Colors } from 'utils/enums';
import AddProduct from 'screens/MyMarket/AddProduct';
const Stack = createStackNavigator();
export interface MyMarketStackProps {
  
}
 
const MyMarketStack: React.FC<MyMarketStackProps> = () => {
  return (  
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.WHITE,
        headerStyle: {
          backgroundColor: Colors.GREEN
        }
      }}
    >
      <Stack.Screen
        name="my-market"
        component={MyMarket}
        options={{
          title: "Mi Tienda"
        }}
      />
      <Stack.Screen
        name="add-product"
        component={AddProduct}
        options={{
          title: "Agregar Producto"
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
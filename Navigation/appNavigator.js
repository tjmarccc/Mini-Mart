import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../Screens/HomePage';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';
import CartIconWithBadge from '../Components/cartIcon';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomePage} />
    </HomeStack.Navigator>
  );
}


const ProductDetailStack = createStackNavigator();

function ProductDetailStackScreen() {
  return (
    <ProductDetailStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductDetailStack.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
    </ProductDetailStack.Navigator>
  );
}



const CartStack = createStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'ProductDetailsTab') { 
            iconName = 'pricetag'; 
          }
          else if (route.name === 'CartTab') {
            return <CartIconWithBadge color={color} size={size} />;
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="ProductDetailsTab" 
        component={ProductDetailStackScreen}
        options={{
          title: 'Product',
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStackScreen}
        options={{
          title: 'Cart',
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from './cartContext';
import { styles } from '../constants/Styles';

const CartIconWithBadge = ({ color, size }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <View style={styles.cartIconContainer}>
      <Ionicons name="cart" size={size} color={color} />
      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </View>
      )}
    </View>
  );
};



export default CartIconWithBadge;
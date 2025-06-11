import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../constants/Styles';

export default function CartCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source = {""}/>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}


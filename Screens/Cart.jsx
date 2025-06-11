import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../Components/cartContext';
import { styles } from '../constants/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomAlert from '../Components/Alert';

const Cart = ({ navigation, route }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getSubtotal,
    getShippingCost,
    getTotalPrice,
  } = useCart();

  const [alertVisible, setAlertVisible] = useState(false);
 
  useEffect(() => {
    if (route.params?.showAlert) {
      setAlertVisible(true);
      navigation.setParams({ showAlert: false });
    }
  }, [route.params?.showAlert]);

  return (
    <SafeAreaView style={styles.homePageContainer}>
      <View style={styles.headerCon}>
        <View style={styles.topRow}>
          <Image
            source={require('../assets/Img/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.deliveryAddress}>
            <Text style={styles.deliveryText}>DELIVERY ADDRESS</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        <Text style={styles.addressText}>Umuezike Road, Oyo State</Text>
      </View>

      <View style={styles.backCon}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Your Cart</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        ) : (
          <>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={item.image} style={styles.cartItemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${(item.price || 0).toFixed(2)}</Text>
                  <View style={styles.quantityControls}>
                    <TouchableOpacity
                      onPress={() => decreaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.itemQuantity}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => increaseQuantity(item.id)}
                      style={styles.quantityButton}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteButton}>
                      <Ionicons name="trash-outline" size={24} color="gray" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            <View style={styles.orderInfoContainer}>
              <Text style={styles.orderInfoTitle}>Order Info</Text>
              <View style={styles.orderInfoRow}>
                <Text style={styles.orderInfoLabel}>Subtotal</Text>
                <Text style={styles.orderInfoValue}>${(getSubtotal() || 0).toFixed(2)}</Text>
              </View>
              <View style={styles.orderInfoRow}>
                <Text style={styles.orderInfoLabel}>Shipping</Text>
                <Text style={styles.orderInfoValue}>${(getShippingCost() || 0).toFixed(2)}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>${(getTotalPrice() || 0).toFixed(2)}</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.checkoutButtonContainer}>
          <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Proceed to Checkout!')}>
            <Text style={styles.checkoutButtonText}>Checkout (${(getTotalPrice() || 0).toFixed(2)})</Text>
          </TouchableOpacity>
        </View>
      )}

      <CustomAlert
        visible={alertVisible}
        message="Item has been added to your cart!"
        onRequestClose={() => setAlertVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Cart;
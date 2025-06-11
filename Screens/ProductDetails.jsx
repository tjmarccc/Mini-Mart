import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../Components/cartContext';
import { styles } from '../constants/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetails = ({ route, navigation }) => {
  const { addToCart } = useCart();

  const { product } = route.params || {};
  const currentProduct = product || null;

  if (!currentProduct || typeof currentProduct !== 'object' || !currentProduct.id) {
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
        <View style={styles.errorContainer}>
          <View style={styles.backCon}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="chevron-back" size={24} color="black" />
              <Text style={styles.headerTitle}>Go back</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.noProdCon}>
            <Text style={styles.emptyText}>No Product was been chosen!</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const handleAddToCart = () => {
    addToCart(currentProduct);
    navigation.navigate('CartTab', {
      screen: 'Cart',
      params: { showAlert: true },
    });
  };

  return (
    <SafeAreaView style={styles.homePageContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Go back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => alert('Added to wishlist')}
        >
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>

        {currentProduct.image && (
          <Image source={currentProduct.image} style={styles.productImage} />
        )}

        <Text style={styles.productName}>{currentProduct.name}</Text>
        <Text style={styles.productPrice1}>
          ${currentProduct.price ? currentProduct.price.toFixed(2) : 'N/A'}
        </Text>

        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItemTitle}>About this item</Text>
          <Text style={styles.aboutItemDescription}>
            {currentProduct.description}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.addToCartButtonContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>

    
    </SafeAreaView>
  );
};

export default ProductDetails;
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { products } from '../data/products';
import { styles } from '../constants/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homePageContainer}>

      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />


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


        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.sectionTitle}>Technology</Text>
        </View>
        <Text style={styles.sectionSubtitle}>Smartphones, Laptops & Accessories</Text>

        <View style={styles.productGrid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetailsTab',
                { screen: 'ProductDetails', params: { product } })}
            >

              <Image source={product.image} style={styles.productImageHomePage} />
              <Text style={styles.productNameHomepage}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomePage;
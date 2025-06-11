import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');



export const styles = StyleSheet.create({

    homePageContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    headerCon: {
        marginHorizontal: 15,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    },
    logo: {
        width: 80,
        height: 30,
    },
    deliveryAddress: {
        alignItems: 'center',
    },
    deliveryText: {
        fontSize: 14,
        paddingRight: 50,
        fontWeight: 'semibold',
    },
    addressText: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 95,
    },
   
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    scrollContent: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    sectionSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 15,
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        width: (width - 45) / 2,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    productImageHomePage: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    productNameHomepage: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    card: {
        padding: 20,
        marginBottom: 10,
        borderRadius: 8
    },
    name: {
        fontSize: 16
    },
    price: {
        fontSize: 14,
        color: 'gray'
    },
    homePageContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    backCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 10,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
  
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 100,
    },
     heartIcon: {
        paddingLeft: "90%",
        paddingTop: 10,
    },
    productImage: {
        width: '90%',
        height: 300,
        resizeMode: 'contain',
    },
    productName: {
        fontSize: 16,
        marginHorizontal: 20,
    },
    productPrice1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    aboutItemContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 15,
        marginTop: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    aboutItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    aboutItemDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: 'gray',
        marginBottom: 5,
    },
    addToCartButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    addToCartButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartIconContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
  
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    scrollContent: {
        paddingHorizontal: 15,
        paddingBottom: 100,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 18,
        color: 'gray',
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#eee',
        borderRadius: 5,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
    itemQuantity: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    deleteButton: {
        padding: 10,
        marginLeft: "30%"
    },
    orderInfoContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    orderInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    orderInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    orderInfoLabel: {
        fontSize: 16,
        color: 'gray',
    },
    orderInfoValue: {
        fontSize: 16,
        fontWeight: '500',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 15,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
    },
    checkoutButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    checkoutButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartContainer: {
        width: 24,
        height: 24,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    noProdCon: {
        paddingHorizontal: 30,
        alignItems: "center",
    },
    noProdText: {
        fontWeight: "bold",
        fontSize: 16
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingTop: 40,

    },
    alertContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        elevation: 5,
        position: 'relative',
        borderLeftColor: 'green',
        borderLeftWidth: 5,
        justifyContent: 'space-between',
        flexDirection: "row",
        height: 60,
        alignItems: 'center',

    },

    Xbutton: {
        paddingBottom: "3%"
    },
    
    message: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        marginHorizontal: 5,
        padding: 8,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});
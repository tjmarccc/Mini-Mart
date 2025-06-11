import React from 'react';
import { Modal, View, Text, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../constants/Styles';

const CustomAlert = ({ visible, message, buttons = [], onRequestClose }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onRequestClose}
        >
            <View style={styles.overlay}>
                <View style={styles.alertContainer}>

                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.xContainer} onPress={onRequestClose}>
                            <Ionicons name="close" size={30} color="black" style={styles.Xbutton} />
                        </TouchableOpacity>
                        {buttons.map((btn, idx) => (
                            <TouchableOpacity
                                key={idx}
                                style={styles.button}
                                onPress={btn.onPress}
                            >
                                <Text style={styles.buttonText}>{btn.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default CustomAlert;
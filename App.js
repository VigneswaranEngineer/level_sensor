import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoiae3Q6NO8I0rfL0Ph7Ko1-eZReh2fig",
    authDomain: "level-sensor-78574.firebaseapp.com",
    projectId: "level-sensor-78574",
    storageBucket: "level-sensor-78574.appspot.com",
    messagingSenderId: "53531970171",
    appId: "1:53531970171:web:ddc863b290fbd90589b0de",
    measurementId: "G-ZNQEFRSRLS"
};

const app = initializeApp(firebaseConfig);

export default function App({ email, setEmail, password, isLogin, setIsLogin, handleAuthentication }) {
    return (
        <View style={styles.authContainer}>
            <Text></Text>
            <StatusBar style="auto" />
        </View>
    );

    
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    authContainer: {
      width: '80%',
      maxWidth: 400,
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      elevation: 3,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
      borderRadius: 4,
    },
    buttonContainer: {
      marginBottom: 16,
    },
    toggleText: {
      color: '#3498db',
      textAlign: 'center',
    },
    bottomContainer: {
      marginTop: 20,
    },
    emailText: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
  });
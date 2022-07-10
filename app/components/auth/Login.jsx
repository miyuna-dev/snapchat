import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import {Ionicons} from 'react-native-vector-icons'
import axios from "axios";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main";

// const Stack = createNativeStackNavigator();

export default function Login({ navigation }) {
  const baseUrl = "http://snapi.epitech.eu:8000/connection";

  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password)
useEffect(() => {

}, [])
  const handleSubmit = () => {
    var data = { email: email, password: password };

    var config = {
      method: "post",
      url: `${baseUrl}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config).then((response) => {
      setData(response.data);
     // save response.data.token dans asyncstorage 
      navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Main')}
      >
          <Ionicons name="chevron-back-outline" size={40} color="black"/>
      </TouchableOpacity>

      <Text style={styles.h1}>Connexion</Text>
      
      {/* EMAIL */}
      <View style={styles.inputDiv}>
      <Text style={styles.textLabel}>Nom d'utilisateur ou e-mail</Text>
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          // autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={setEmail}
          value={email}
          style={styles.inputField}
        />
      </View>

      {/* PASSWORD */}
      <View style={styles.inputDiv}>
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          icon="key"
          placeholder="Enter your password"
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
          onChangeText={setPassword}
          value={password}
          style={styles.inputField}
        />
      </View>

      {/* LogBtn */}
        <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontWeight: "400",
    letterSpacing: 1,
    fontSize: '20'
  },
  labelInput: { 
    color: "#223e4b", fontSize: 20, marginBottom: 16 
  },
  inputDiv: { 
    paddingHorizontal: 32, marginBottom: 16, width: "100%" 
  },
  loginBtn: { 
    backgroundColor: "#0eadff", 
    marginBottom: 16, 
    width: "80%", 
    text: "center", 
    borderRadius: "50%", 
    height: "5%", 
    justifyContent: "center", 
    alignItems: "center", 
  },
  text: {
    fontSize: 19,
    color: "#fff",
  },
  textLabel: {
    textTransform: 'uppercase'
  },

});
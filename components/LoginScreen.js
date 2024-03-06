import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      alert("valid number!");
    } else {
      alert("invalid number!");
    }
  };

  const navigateToSignup = () => {
    navigation.navigate("Sign Up");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require("../assets/2.jpeg")} style={styles.topImage} />
        <Text style={styles.description}>
          India's First Home-to-Consumer Social Enterprise Platform
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>Proceed with</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
        />
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestion}>+91 9876543210</Text>
          <Text style={styles.suggestion}>+91 9876543210</Text>
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBlack}>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.signupTextBlue}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  topContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: -15,
  },
  topImage: {
    width: 350,
    height: 400,
    marginBottom: 20,
  },

  description: {
    marginBottom: 5,
    lineHeight: 25,
    textAlign: "center",
    color: "#8880f6",
    fontSize: 20,
  },
  content: {
    width: "100%",
  },
  placeholder: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    borderRadius: 5,
  },
  suggestionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  suggestion: {
    width: "48%",
    padding: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 20,
    textAlign: "center",
  },
  bottomContainer: {
    alignItems: "center",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  signupTextBlack: {
    fontSize: 16,
    color: "#000",
  },
  signupTextBlue: {
    fontSize: 16,
    color: "#8880f6",
  },
});

export default LoginScreen;

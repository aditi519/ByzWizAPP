import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate("Log In");
  };

  const navigateToSignup = () => {
    navigation.navigate("Sign Up");
  };
  return (
    <View style={styles.screenContainer}>
      <Image source={require("../assets/2.jpeg")} style={styles.topImage} />

      <Text style={styles.description}>
        India's First Home-to-Consumer Social Enterprise Platform
      </Text>

      <AppButton
        title="Log In"
        backgroundColor="#8880f6"
        textColor="#fff"
        onPress={navigateToLogin}
      />
      <AppButton
        title="Sign Up"
        backgroundColor="#fff"
        borderColor="#8880f6"
        textColor="#8880f6"
        onPress={navigateToSignup}
      />
    </View>
  );
};

const AppButton = ({
  onPress,
  title,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  const buttonStyles = [styles.appButtonContainer];
  const textStyles = [styles.appButtonText];

  if (backgroundColor) {
    buttonStyles.push({ backgroundColor });
  }

  if (borderColor) {
    buttonStyles.push({ borderColor, borderWidth: 2 });
  }

  if (textColor) {
    textStyles.push({ color: textColor });
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    marginTop: -4,
  },
  topImage: {
    width: 350,
    height: 400,
    marginBottom: 40,
  },

  description: {
    marginBottom: 55,
    lineHeight: 30,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#8880f6",
    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 350,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});

export default HomeScreen;

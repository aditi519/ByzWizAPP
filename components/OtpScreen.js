import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const OtpScreen = ({ route, navigation }) => {
  const mobileNumber = route?.params?.mobileNumber || "";
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleVerify = () => {};

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>
        Enter the OTP sent to +91{" "}
        <Text style={{ fontWeight: "bold" }}>{mobileNumber}</Text>
      </Text>

      <View style={[styles.otpContainer, { padding: 5 }]}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TextInput
            key={index}
            ref={inputRefs.current[index]}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChangeText(text, index)}
            value={otp[index]}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.verifyButton,
          { backgroundColor: otp.join("").length === 4 ? "#8880f6" : "#ccc" },
        ]}
        onPress={handleVerify}
        disabled={otp.join("").length < 4}
      >
        <Text style={styles.verifyButtonText}>Verify and Proceed</Text>
      </TouchableOpacity>

      <Text style={styles.retryText}>Resend OTP</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Log In")}
        style={styles.logInText}
      >
        <Text style={styles.logInBlackText}>Already on ByzWiz?</Text>
        <Text style={styles.logInPurpleText}> Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  subHeading: {
    marginTop: 30,
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "60%",
    marginBottom: 20,
    paddingTop: 20,
  },
  otpInput: {
    width: 40,
    borderBottomWidth: 2,
    borderColor: "#8880f6",
    fontSize: 20,
    textAlign: "center",
  },
  verifyButton: {
    borderRadius: 7,
    width: 350,
    paddingVertical: 12,
    marginTop: 70,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  retryText: {
    color: "#8880f6",
    marginTop: 60,
  },
  logInText: {
    flexDirection: "row",
    marginTop: 300,
  },
  logInBlackText: {
    color: "#000",
  },
  logInPurpleText: {
    color: "#8880f6",
  },
});

export default OtpScreen;

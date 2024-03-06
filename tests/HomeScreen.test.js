import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../components/HomeScreen";

describe("HomeScreen", () => {
  it("renders Login button with correct text", () => {
    const { getByText } = render(<HomeScreen />);
    const loginButton = getByText("Log In");
    expect(loginButton).toBeDefined(); 
  });

  it("renders Signup button with correct text", () => {
    const { getByText } = render(<HomeScreen />);
    const signUpButton = getByText("Sign Up");
    expect(signUpButton).toBeDefined(); 
  });


});

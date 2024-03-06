import React from 'react';
import { render } from "@testing-library/react-native";
import SignupScreen from '../components/SignupScreen';

describe('SignupScreen', () => {
    it("renders Signup button with correct text", () => {
        const { getByText } = render(<SignupScreen />);
        const signUpButton = getByText("Sign Up");
        expect(signUpButton).toBeDefined(); 
      });
    
    
    });
    
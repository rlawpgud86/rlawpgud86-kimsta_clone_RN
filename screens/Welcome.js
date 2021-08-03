import React from "react";
<<<<<<< HEAD
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        onPress={goToCreateAccount}
      />
      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
=======
import { Text, TouchableOpacity, View } from "react-native";

export default function Welcome({navigation}) {
  return (
    <View>
      <Text>반갑습니다.</Text>
    <TouchableOpacity onPress={()=> navigation.navigate("CreateAccount")}>
          <View>
      <Text>Go to Create Account.</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate("LogIn")}>
          <View>
      <Text>Go to Log in.</Text>
    </View>
    </TouchableOpacity>
    </View>
  );
}
>>>>>>> 2a7f976dce559143e9569add033a81dd8fe9fe56

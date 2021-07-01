import React from "react";
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
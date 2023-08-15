import { View, Text, Image } from "react-native";
import React from "react";
import { S } from "./Header.style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <View>
      <Image source={logo} style={S.img} resizeMode='contain' />
      <Text style={S.text}>Tu as surement quelque chose a faire</Text>
    </View>
  );
};

export default Header;

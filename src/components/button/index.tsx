import React from "react";
import { Button, Text, TouchableOpacity, useColorScheme } from "react-native";
import { styleDark, styleDefault, styleLight } from "./styles";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  btnStyle?: object;
  titleStyle?: object;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ title, onPress, btnStyle,titleStyle }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = isDarkMode ? styleDark : styleLight;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ styleDefault.btnPrimary, styles.btnPrimary, btnStyle]}
    >
      <Text style={[styleDefault.titlePrimary, styles.btnPrimary, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

export const styleDefault = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  titlePrimary: {
    color: colors.primary,
  },
});

export const styleLight = StyleSheet.create({
  btnPrimary: {},
});

export const styleDark = StyleSheet.create({
  btnPrimary: {},
});

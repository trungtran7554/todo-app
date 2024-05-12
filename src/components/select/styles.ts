import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

export const styleDefault = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  selectBtn: {
    paddingVertical: 5,
  },
  selectTxt: {
    color: colors.primary,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    minWidth: 200,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeBtn: {
    alignSelf: "flex-end",
    marginBottom: 10,
    color: "blue",
  },
  options: {
    marginBottom: 10,
  },
});

export const styleLight = StyleSheet.create({});

export const styleDark = StyleSheet.create({});

import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

export const styleDefault = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    height: 55,
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  headerLeft: {
    width: "25%",
    justifyContent: "center",
  },
  headerCenter: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtBack: {
    color: "blue",
  },
  titleCenter: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 1,
    marginTop: 30,
    padding: 15,
  },
  title: {
    color: colors.text,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 5,
  },
  btnSubmit: {
    marginTop: 50,
  },
});

export const styleLight = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export const styleDark = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
  },
});

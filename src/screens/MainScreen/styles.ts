import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors";

export const styleDefault = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxHead: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxBtnTab: {
    flexDirection: "row",
  },
  btnTab: {
    marginRight: 20,
    paddingVertical: 5,
  },
  btnTabActive: {
    color: colors.primary,
    fontWeight: "bold",
  },
  todoList: {
    flex: 1,
    padding: 15,
  },
  todoBox: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleTodo: {
    fontSize: 18,
    fontWeight: "bold",
    width: Dimensions.get("window").width - 200,
  },
  boxBtnAction: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  btnDelete: {
    backgroundColor: "red",
    marginLeft: 10,
  },
  txtDelete: {
    color: colors.white,
  },
  descriptionTodo: {
    fontSize: 16,
  },
  btnShow: {
    marginTop: 10,
  },
  txtShow: {
    textAlign: "center",
    color: colors.grey,
  },
});

export const styleLight = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  title: {
    color: colors.text,
  },
  titleTodo: {
    color: colors.text,
  },
  descriptionTodo: {
    color: colors.text,
  },
});

export const styleDark = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
  },
  title: {
    color: colors.white,
  },
  titleTodo: {
    color: colors.white,
  },
  descriptionTodo: {
    color: colors.white,
  },
});

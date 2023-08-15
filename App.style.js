import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 0,
    backgroundColor: "#FAFAFA",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  body: {
    flex: 5,
    padding: 0,
    backgroundColor: "#FAFAFA",
  },
  footer: {
    backgroundColor: "black",
    height: 70,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0,
    shadowRadius: 5.62,
    elevation: 25,
  },
  item: {
    marginHorizontal: 12,
    marginVertical: 7,
  },
  btnAdd: {},
});

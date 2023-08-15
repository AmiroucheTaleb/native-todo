import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  active: {
    color: "#0084ff",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

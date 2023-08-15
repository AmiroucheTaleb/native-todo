import { StyleSheet } from "react-native";

export const S = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.62,
    elevation: 6,
  },
  text: {
    fontSize: 18,
  },
  img: { height: 24, width: 24 },
  imgDisplay: { display: "none" },
  textChecked: {
    textDecorationLine: "line-through",
  },
});

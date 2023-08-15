import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { S } from "./AddTask.style.js";

const AddTask = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={S.btn}>
      <Text style={S.text}>+ New todo</Text>
    </TouchableOpacity>
  );
};

export default AddTask;

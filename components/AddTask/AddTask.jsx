import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { S } from "./AddTask.style.js";

const AddTask = () => {
  return (
    <TouchableOpacity style={S.btn}>
      <Text style={S.text}>+ New todo</Text>
    </TouchableOpacity>
  );
};

export default AddTask;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { S } from "./TaskCard.style";
import check from "../../assets/check.png";

const TaskCard = ({ task, update, deleteTask }) => {
  return (
    <View>
      <TouchableOpacity
        style={S.button}
        onLongPress={() => deleteTask(task)}
        onPress={() => update(task)}
      >
        <Text style={[S.text, task.isCompleted ? S.textChecked : ""]}>{task.title} </Text>
        <Image
          style={[S.img, !task.isCompleted ? S.imgDisplay : ""]}
          source={check}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;

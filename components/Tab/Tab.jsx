import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "./Tab.style";

const Tab = ({ currentTab, changeActiveTab, todoList }) => {
  const countByStatut = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: todoList.length, inProgress: 0, done: 0 }
  );
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => changeActiveTab("all")}>
        <Text style={[s.text, currentTab === "all" && s.active]}>All ({countByStatut.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeActiveTab("inProgress")}>
        <Text style={[s.text, currentTab === "inProgress" && s.active]}>
          In progress ({countByStatut.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeActiveTab("done")}>
        <Text style={[s.text, currentTab === "done" && s.active]}>Done ({countByStatut.done})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab;

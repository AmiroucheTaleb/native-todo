import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Header from "./components/Header/Header";
import TaskCard from "./components/TaskCard/TaskCard";
import { useState } from "react";
import Tab from "./components/Tab/Tab";
import AddTask from "./components/AddTask/AddTask";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [activeTab, setActiveTab] = useState("inProgress");

  function deleteTodo(task) {
    Alert.alert(
      "Supression",
      `tu est sur de vouloire supprimer  ? \ntu veux plus ${task.title} ?`,
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          onPress: () => setTodoList(todoList.filter((todo) => todo.id !== task.id)),
          style: "destructive",
        },
      ]
    );
  }

  function changeActiveTab(selectedTab) {
    setActiveTab(selectedTab);
  }

  function getFiltredTodoList() {
    switch (activeTab) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }

  function updateTodoList(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex((todo) => todo.id === updatedTodo.id);

    const updatedTodoList = [...todoList];

    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  function renderTodoList() {
    return getFiltredTodoList().map((todo) => (
      <View style={s.item} key={todo.id}>
        <TaskCard task={todo} deleteTask={deleteTodo} update={updateTodoList} />
      </View>
    ));
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView style={{}}>{renderTodoList()}</ScrollView>
          </View>
          <AddTask style={s.btnAdd} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Tab currentTab={activeTab} changeActiveTab={changeActiveTab} todoList={todoList} />
      </View>
    </>
  );
}

import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Header from "./components/Header/Header";
import TaskCard from "./components/TaskCard/TaskCard";
import { useEffect, useState } from "react";
import Tab from "./components/Tab/Tab";
import AddTask from "./components/AddTask/AddTask";
import Dialog from "react-native-dialog";
import uuid from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstRender = true;
let isLoadUpdated = false;

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [activeTab, setActiveTab] = useState("inProgress");
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [addValue, setAddValue] = useState("");

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    if (isLoadUpdated) {
      isLoadUpdated = false;
    } else {
      if (!isFirstRender) {
        saveTodoList(todoList);
      } else {
        isFirstRender = false;
      }
    }
  }, [todoList]);

  async function saveTodoList(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("todo-list", jsonValue);
      console.log("save");
    } catch (e) {
      console.log(e);
    }
  }

  async function loadTodoList() {
    try {
      const stringValue = await AsyncStorage.getItem("todo-list");
      if (stringValue !== null) {
        const jsonValue = JSON.parse(stringValue);
        isLoadUpdated = true;
        setTodoList(jsonValue);
        console.log("loading");
      }
    } catch (e) {
      console.log("error loading todo list");
    }
  }

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
  function showAddPopup() {
    setIsAddVisible(true);
  }
  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: addValue,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddVisible(false);
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
          <AddTask onPress={showAddPopup} style={s.btnAdd} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Tab currentTab={activeTab} changeActiveTab={changeActiveTab} todoList={todoList} />
      </View>
      <Dialog.Container visible={isAddVisible} onBackdropPress={() => setIsAddVisible(false)}>
        <Dialog.Title style={{ color: "black", fontWeight: "bold" }}>
          Ajouter une tache
        </Dialog.Title>
        <Dialog.Description style={{ color: "black" }}>
          vasy ecrit moi cette tache mais tu as interet a la faire , je veux pas qu'elle reste in
          progress trop longtemp
        </Dialog.Description>
        <Dialog.Input
          onChangeText={setAddValue}
          style={{ color: "#bedcff", backgroundColor: "#000000" }}
        />
        <Dialog.Button disabled={addValue.trim().length === 0} label='Créer' onPress={addTodo} />
      </Dialog.Container>
    </>
  );
}

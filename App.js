import React, { useCallback, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
} from "react-native";
import Form from "./components/Form";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback((name) => {
    const newTask = {
      name,
      id: new Date().getTime(),
      check: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }, []);
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((el) => el.id !== id));
  }, []);
  const handleChangeTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((el) => (el.id === id ? { ...el, check: !el.check } : el))
    );
  }, []);
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={styles.content}>
        <Text style={styles.text}>Todo list app</Text>
        <ScrollView
          style={styles.listTask}
          showsVerticalScrollIndicator={false}
        >
          {tasks.map((el) => (
            <Task
              item={el}
              key={el.id}
              deleteTask={deleteTask}
              handleChangeTask={handleChangeTask}
            />
          ))}
        </ScrollView>
        <View style={styles.form}>
          <Form addTask={addTask} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EAED",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 70 : 0,
  },
  content: {
    padding: 20,
    flex: 1,
  },
  listTask: {
    marginTop: 10,
    maxHeight: "80%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 28,
    color: "#1A1A1A",
  },
  form: {
    position: "absolute",
    bottom: 37,
    left: 20,
    width: "100%",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Metrics } from "./Metrics";
import React, { useState } from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>To Do </Text>
    </View>
  );
};
type inputProps = {
  text: string;
  setText: (text: string) => void;
  todos: string[];
  setTodos: (todos: string[]) => void;
};
const Input = (props: inputProps) => {
  const { text, setText, todos, setTodos } = props;
  return (
    <TextInput
      style={styles.input}
      placeholder="Add a todo"
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
};

type todoProps = {
  onPress: () => void;
};
const Todo = (props: todoProps) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      style={styles.todo}
      onPress={onPress}
    >
      <Text style={styles.todoText}>Add Todo</Text>
    </TouchableOpacity>
  );
};

const TodoList = ({ todos }: { todos: string[] }) => {
  return (
    <View style={styles.todolist}>
      {todos.map((todo) => (
        <Text key={todo} style={styles.todoitem}>{todo}</Text>
      ))}
    </View>
  );
};

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handlePress = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text.trim()]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Input text={text} setText={setText} todos={todos} setTodos={setTodos} />
      <Todo onPress={handlePress} />
      <TodoList todos={todos} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "coral",
    width: "100%",
    height: Metrics.measureHeight(70),
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  headerText: {
    top: Metrics.measureHeight(10),
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: Metrics.measureHeight(50),
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "coral",
    padding: 10,
    fontSize: 20,
    marginTop: Metrics.measureHeight(20),
  },
  todo: {
    width: "30%",
    height: Metrics.measureHeight(50), 
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "coral",
    marginTop: Metrics.measureHeight(20),
  },
  todoText: {
    color: "coral",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    top: Metrics.measureHeight(10),
  },
  todolist: {
    width: "90%",
    height: Metrics.measureHeight(300),
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "coral",
    marginTop: Metrics.measureHeight(70),
  },
  todoitem: {
borderBottomWidth: 1,

    borderColor: "coral",

    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
    color: "blue",
    left: Metrics.measureWidth(10),
  },
});

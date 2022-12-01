import React, { useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import IconAntDesgin from "react-native-vector-icons/AntDesign";

const Form = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handlePress = () => {
    addTask(value);
    setValue("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write a task"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <IconAntDesgin name="plus" color={"#C0C0C0"} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Form;

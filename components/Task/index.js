import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Entypo";
import IconAntdesgin from "react-native-vector-icons/AntDesign";

const Task = ({ item, deleteTask, handleChangeTask }) => {
  const { check, name, id } = item;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.check}
          onPress={() => handleChangeTask(id)}
        >
          <Icon name="check" style={{ display: check ? "block" : "none" }} />
        </TouchableOpacity>
        <Text style={{ ...styles.nameTask, marginLeft: 15 }}>{name}</Text>
      </View>
      <View style={styles.right}>
        <IconAntdesgin
          name="delete"
          size={20}
          color="gray"
          onPress={() => deleteTask(id)}
        />
      </View>
    </View>
  );
};

export default Task;

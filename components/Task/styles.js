import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "#F7F7F7",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameTask: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    color: "#1A1A1A",
  },
  check: {
    backgroundColor: "rgba(85, 188, 246, 0.4)",
    width: 24,
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  right: {},
});

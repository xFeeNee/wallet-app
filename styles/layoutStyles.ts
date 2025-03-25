import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
    padding: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    width: "100%",
  },
});

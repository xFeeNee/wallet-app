// layoutStyles.ts
import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8", // Jasne tło
  },
  dateItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  selectedDateItem: {
    backgroundColor: "#f0f0f0",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  addTransactionButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },

  filterButtonSmall: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#1976D2",
    borderWidth: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc", // Jasne obramowanie
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#333",
  },
});

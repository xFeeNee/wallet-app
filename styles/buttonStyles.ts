import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  addTransactionButton: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: 10,
    height: 45,
  },
  filterButtonSmall: {
    backgroundColor: "#E3F2FD",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
  },
  filterButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  cancelButton: {
    backgroundColor: "#F44336",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#F44336",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});

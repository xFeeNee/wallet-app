import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    width: "90%",
    alignSelf: "center",
  },
  sortIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    width: "50%",
    justifyContent: "center",
  },
});

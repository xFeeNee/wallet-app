// modalStyles.ts
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface SwitchStyles {
  switchContainer: ViewStyle;
  switchLabel: TextStyle;
  activeLabel: TextStyle;
}

export const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  pickerItem: {
    fontSize: 16,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    gap: 10,
  },
  modalBody: {
    paddingVertical: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20, // Upewnij się, że to jest ustawione
    width: "100%",
    maxHeight: "90%", // Możesz dostosować tę wartość
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderColor: "#1976D2",
    borderWidth: 1,
  },
  pickerContainer: {
    marginBottom: 15,
    zIndex: 9999,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  sortIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  filterContainer: {
    padding: 20,
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderColor: "#1976D2",
    borderWidth: 1,
  },
  cancelButton: {
    backgroundColor: "#F44336",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderColor: "#F44336",
    borderWidth: 1,
  },
  addTransactionButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    borderColor: "#1976D2",
    borderWidth: 1,
  },
  content: {
    width: "100%",
    paddingVertical: 15,
  },
});

export const switchStyles: SwitchStyles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  switchLabel: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#757575",
  },
  activeLabel: {
    fontWeight: "bold",
    color: "#333",
  },
});
